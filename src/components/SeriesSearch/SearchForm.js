import React from 'react';

export const SearchForm = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target.querySelector('input[type="text"]').value;
    onSubmit(inputValue);

    event.target.reset();
  };

  return (
    <form className="searchForm" onSubmit={handleSubmit}>
      <input placeholder="Search Series Here" type="text" />
      <input type="submit" />
    </form>
  );
};
