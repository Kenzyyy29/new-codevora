"use client";

import {useState} from "react";

const SearchBox = () => {
 const [searchInput, setSearchInput] = useState("");

 const handleSearch = (e) => {
  e.preventDefault();
  onSearch(searchInput);
 };
 <form
  onSubmit={handleSearch}>
  <input
   type="text"
   placeholder="Search products..."
   value={searchInput}
   onChange={(e) => setSearchInput(e.target.value)}
   className="border p-2 bg-white rounded-lg"
  />
  <button
   type="submit"
   className="bg-blue-500 text-white px-4 py-2 ml-2">
   Search
  </button>
 </form>;
};

export default SearchBox;
