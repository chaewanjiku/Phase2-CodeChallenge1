import React from 'react';

// SearchBar component with a text input for searching transactions
const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search for your Recent Transactions"
      style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
      // Call onSearch function when the input value changes
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;