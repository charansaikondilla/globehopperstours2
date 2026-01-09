
import React, { useState } from 'react';

interface SearchProps {
  onSearch: (countryName: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex justify-center max-w-md mx-auto">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a country..."
        className="px-4 py-2 w-full text-white bg-gray-800 bg-opacity-70 border border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Search for a country"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Submit search"
      >
        Go
      </button>
    </form>
  );
};

export default Search;
