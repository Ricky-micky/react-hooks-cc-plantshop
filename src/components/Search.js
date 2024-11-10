import React, { useContext } from "react";
import { PlantContext } from "./App";

function Search() {
  const { search, handleSearchChange } = useContext(PlantContext);
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        value={search}
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearchChange}
      />
    </div>
  );
}
export default Search;