import React from 'react';
import './Search.css';

const Search = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by ID or Title"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="search-input"
    />
  );
};

export default Search;
