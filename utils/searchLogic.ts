
import { destinationsData, CountryData } from '../data/destinations';

// Levenshtein distance for fuzzy matching
const levenshteinDistance = (a: string, b: string): number => {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;

    const matrix = [];

    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // substitution
                    Math.min(
                        matrix[i][j - 1] + 1, // insertion
                        matrix[i - 1][j] + 1 // deletion
                    )
                );
            }
        }
    }

    return matrix[b.length][a.length];
};

interface SearchResult {
    countryKey: string;
    score: number; // Lower is better (0 is exact match)
    matchType: 'exact' | 'fuzzy' | 'keyword' | 'package';
    matchedTerm: string;
}

export interface DestinationResult {
    name: string;
    coordinates: [number, number];
}

export const findDestination = (query: string): DestinationResult | null => {
    const normalizedQuery = query.toLowerCase().trim();
    if (!normalizedQuery) return null;

    let bestMatch: SearchResult | null = null;
    const threshold = 3; // Max edit distance allowed for fuzzy match

    const entries = Object.entries(destinationsData);

    for (const [key, data] of entries) {
        // 1. Check Country Name (Exact & Fuzzy)
        const countryName = data.displayName.toLowerCase();

        // Exact
        if (countryName === normalizedQuery) {
            return { name: data.displayName, coordinates: data.coordinates };
        }

        // Fuzzy Country Name (e.g. "Thaliand" -> "Thailand")
        // Stricter threshold: max 2 edits, or 1 for short words (< 5 chars)
        const maxEdits = countryName.length < 5 ? 1 : 2;

        const dist = levenshteinDistance(countryName, normalizedQuery);
        if (dist <= maxEdits) {
            if (!bestMatch || dist < bestMatch.score) {
                bestMatch = { countryKey: key, score: dist, matchType: 'fuzzy', matchedTerm: countryName };
            }
        }

        // 2. Check Keywords (Cities, synonyms)
        if (data.keywords) {
            for (const keyword of data.keywords) {
                const lowerKeyword = keyword.toLowerCase();

                // Exact Keyword Match
                if (lowerKeyword === normalizedQuery) {
                    // Prefer exact keyword match over fuzzy country match unless we already have 0 score
                    if (!bestMatch || bestMatch.score > 0) {
                        bestMatch = { countryKey: key, score: 0, matchType: 'keyword', matchedTerm: keyword };
                    }
                }

                // Fuzzy Keyword Match (e.g. "Mumbau" -> "Mumbai")
                const kMaxEdits = lowerKeyword.length < 5 ? 1 : 2;
                const kDist = levenshteinDistance(lowerKeyword, normalizedQuery);
                if (kDist <= kMaxEdits) {
                    if (!bestMatch || kDist < bestMatch.score) {
                        bestMatch = { countryKey: key, score: kDist, matchType: 'fuzzy', matchedTerm: keyword };
                    }
                }
            }
        }

        // 3. Check Package Locations & Titles
        if (data.packages) {
            for (const pkg of data.packages) {
                const locationWords = pkg.location.toLowerCase().split(/[•, ]+/); // Split by common separators

                // Check against location words
                for (const word of locationWords) {
                    if (word === normalizedQuery) {
                        if (!bestMatch || bestMatch.score > 0) {
                            bestMatch = { countryKey: key, score: 0, matchType: 'package', matchedTerm: word };
                        }
                    }
                    // Fuzzy location word
                    const lDist = levenshteinDistance(word, normalizedQuery);
                    if (lDist <= 2) { // Stricter for short words
                        if (!bestMatch || lDist < bestMatch.score) {
                            bestMatch = { countryKey: key, score: lDist, matchType: 'fuzzy', matchedTerm: word };
                        }
                    }
                }
            }
        }
    }

    if (bestMatch) {
        const data = destinationsData[bestMatch.countryKey];
        return { name: data.displayName, coordinates: data.coordinates };
    }

    return null;
};

// New function for search suggestions
export const getSearchSuggestions = (query: string): string[] => {
    const normalizedQuery = query.toLowerCase().trim();
    if (!normalizedQuery || normalizedQuery.length < 2) return [];

    const suggestions = new Set<string>();
    const entries = Object.entries(destinationsData);

    for (const [_, data] of entries) {
        // Check Country Name
        if (data.displayName.toLowerCase().includes(normalizedQuery)) {
            suggestions.add(data.displayName);
        }

        // Check Keywords
        if (data.keywords) {
            for (const keyword of data.keywords) {
                if (keyword.toLowerCase().includes(normalizedQuery)) {
                    suggestions.add(`${keyword} (${data.displayName})`);
                }
            }
        }
    }

    // Convert Set to Array and take top 5
    return Array.from(suggestions).slice(0, 5);
};
