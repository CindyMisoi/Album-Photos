import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="relative">
      {/* Using search icon from react-icons */}
      <FaSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
      <input
        type="text"
        placeholder="Search..."
        className="w-full md:w-96 py-2 pl-12 pr-12 rounded-full border border-gray-300 focus:border-blue-500 focus:outline-none"
      />
    </div>
  );
};

export default Search;
