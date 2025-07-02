import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar2 = () => {
  return (
    <div className={`w-full mt-10 transition-all duration-300 bg-white z-40`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center border rounded-full overflow-hidden px-4 py-2">
          <span className="text-gray-400 text-xl mr-2">
            <FaSearch />
          </span>
          <input
            type="text"
            placeholder="Search for a movie, TV show, person..."
            className="w-full outline-none text-gray-800 text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar2;
