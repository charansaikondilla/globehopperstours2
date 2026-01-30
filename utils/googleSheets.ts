
import { DestinationsData, destinationsData as localData, TravelPackage } from '../data/destinations';

// User will paste their Web App URL here after deployment
// Example: 'https://script.google.com/macros/s/AKfycbx.../exec'
export const GOOGLE_SHEETS_API_URL = 'https://script.google.com/macros/s/AKfycbxxMM8IsKRZKKz96EGQcoPjjpA_XjzGbV4b9O2mnjbUoIoSB_qV9pq_EvQl1Ba2125y/exec';

export interface SheetPricingRow {
    id: string; // matches package.id
    country: string;
    title: string;
    price: string;
    currency: string;
}

/**
 * Fetches pricing data from Google Sheets.
 * If API URL is missing or fetch fails, it returns null (signals to use local data).
 */
export async function fetchPricingFromSheets(): Promise<SheetPricingRow[] | null> {
    if (!GOOGLE_SHEETS_API_URL) {
        console.warn('Google Sheets API URL is not set. Using local data.');
        return null;
    }

    try {
        const response = await fetch(GOOGLE_SHEETS_API_URL);
        const json = await response.json();

        if (json.status === 'success' && Array.isArray(json.data)) {
            console.log('Successfully fetched pricing from Sheets:', json.data.length, 'items');
            return json.data as SheetPricingRow[];
        } else {
            console.error('Invalid data format from Sheets:', json);
            return null;
        }
    } catch (error) {
        console.error('Failed to fetch from Sheets:', error);
        return null;
    }
}

/**
 * Merges the fetched pricing data into the complex DestinationsData structure.
 * This ensures we keep all the rich static data (images, descriptions) 
 * but override just the price/currency.
 */
export function mergePricingData(
    local: DestinationsData,
    pricing: SheetPricingRow[]
): DestinationsData {
    // Deep clone to avoid mutating the original static object directly
    const updatedData = JSON.parse(JSON.stringify(local)) as DestinationsData;

    pricing.forEach(row => {
        const countryKey = row.country.toLowerCase();

        // Find if country exists
        if (updatedData[countryKey]) {
            const country = updatedData[countryKey];

            // Allow updating country-level currency if needed
            if (row.currency) {
                country.currency = `(${row.currency})`; // Simplified update
            }

            // Find valid package
            const pkgIndex = country.packages.findIndex(p => p.id === row.id);
            if (pkgIndex !== -1) {
                // UPDATE PRICE AND CURRENCY
                updatedData[countryKey].packages[pkgIndex].price = `${row.currency}${row.price}`;
            }
        }
    });

    return updatedData;
}
