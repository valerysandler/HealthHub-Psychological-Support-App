// Search bar component

// import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';


export default function SearchBar() {
//   const [searchTerm, setSearchTerm] = useState('');


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // search(searchTerm);
    // history.push('/search');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-row justify-center items-center">
      <input
        type="text"
        placeholder="Search for a doctor"
        className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-purple-600 focus:outline-none"
        // onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        type="submit"
        className="flex items-center justify-center px-4 py-2 border border-transparent rounded-r-md bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-purple-600 focus:outline-none"
      >
        <SearchIcon className="h-5 w-5 text-white" aria-hidden="true" />
      </button>
    </form>
  );
}