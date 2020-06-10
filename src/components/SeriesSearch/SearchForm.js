import React from 'react';

export const SearchForm = ({ handleChange, handleSubmit, value }) => {
  return (
    <form className="searchForm">
      <input
        onChange={handleChange}
        placeholder="Search Series Here"
        type="text"
        value={value}
      />
      <input onClick={handleSubmit} value="search" type="submit" />
    </form>
  );
};
