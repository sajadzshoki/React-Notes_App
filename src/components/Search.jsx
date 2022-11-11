import React from "react";
import { FiSearch } from "react-icons/fi";
export default function Search({ handleSearchNote }) {
  return (
    <div className="search">
      <FiSearch className="search-icon" />
      <input
        onChange={(event) => handleSearchNote(event.target.value)}
        type="text"
        placeholder="type to search"
      ></input>
    </div>
  );
}
