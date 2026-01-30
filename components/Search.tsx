import React, { useState, useEffect, useRef } from 'react';
import { getSearchSuggestions } from '../utils/searchLogic';
import { useDestinations } from '../context/DestinationsContext';

interface SearchProps {
  onSearch: (countryName: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const { destinations } = useDestinations();
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Close suggestions when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim().length >= 2) {
      const results = getSearchSuggestions(value, destinations); // Pass dynamic data
      setSuggestions(results);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    // If suggestion is in format "City (Country)", extract Country or keep as is?
    // Actually, our smart search handles "City" just fine.
    // But for cleaner UI, let's put the full suggestion in the box.
    // Or better yet, strip the (Country) part if we want just the keyword?
    // Let's keep it simple: use the suggestion as is, but maybe strip the suffix if it helps?
    // The search logic handles keywords, so "Male (Maldives)" -> "Male" search -> finds coordinates.
    // Wait, "Male (Maldives)" might not fuzzy match well if I pass the whole string.
    // Let's extract the part before " ("

    const cleanTerm = suggestion.split(' (')[0];
    setSearchTerm(cleanTerm);
    onSearch(cleanTerm);
    setShowSuggestions(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
      setShowSuggestions(false);
    }
  };

  return (
    <div ref={wrapperRef} className="relative group w-full">
      <form onSubmit={handleSubmit} className="flex items-center gap-3">
        <div className="relative flex-grow flex items-center">
          <div className="absolute left-5 text-blue-400 group-focus-within:text-blue-300 transition-colors pointer-events-none z-10">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            onFocus={() => {
              if (searchTerm.trim().length >= 2) setShowSuggestions(true);
            }}
            placeholder="Search destination (e.g. Maldives, Paris)..."
            className="w-full pl-14 pr-6 py-5 glass-card bg-white/5 border-white/10 rounded-[2rem] text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/10 transition-all duration-500 font-bold tracking-tight text-lg shadow-2xl relative z-0"
            aria-label="Search for a country"
            autoComplete="off"
          />
        </div>
        <button
          type="submit"
          className="px-10 py-5 bg-white text-blue-700 font-black rounded-[2rem] hover:scale-105 active:scale-95 transition-all duration-500 shadow-xl shadow-blue-900/20 uppercase tracking-[0.1em] text-sm"
          aria-label="Submit search"
        >
          Discover
        </button>
      </form>

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 mt-2 w-[calc(100%-140px)] bg-[#0f172a]/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-50">
          <ul className="py-2">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="px-6 py-3 hover:bg-blue-500/20 cursor-pointer text-white font-medium transition-colors flex items-center gap-3"
              >
                <span className="text-blue-400">✈</span>
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
