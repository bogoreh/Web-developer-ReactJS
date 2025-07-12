// src/components/SearchBar.js
import React, { memo } from 'react';

const SearchBar = memo(({ filters, onFilterChange }) => {
  const handleChange = (e) => {
    onFilterChange({ [e.target.name]: e.target.value });
  };

  const handleCheckbox = (e) => {
    onFilterChange({ [e.target.name]: e.target.checked });
  };

  return (
    <div className="search-bar">
      <div className="search-group">
        <label htmlFor="search" className="sr-only">Search</label>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Filter by title, companies..."
          value={filters.search}
          onChange={handleChange}
        />
      </div>
      
      <div className="search-group">
        <label htmlFor="location" className="sr-only">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Filter by location..."
          value={filters.location}
          onChange={handleChange}
        />
      </div>
      
      <div className="search-group checkbox-group">
        <input
          type="checkbox"
          id="fullTime"
          name="fullTime"
          checked={filters.fullTime}
          onChange={handleCheckbox}
        />
        <label htmlFor="fullTime">Full Time Only</label>
      </div>
      
      <button className="search-button">Search</button>
    </div>
  );
});

export default SearchBar;