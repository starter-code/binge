import React, { useRef } from 'react';

export const SearchForm = ({ onSubmit }) => {
  const inputRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputRef);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input placeholder="Search Series Here" type="text" ref={inputRef} />
      <input type="submit" />
    </form>
  );
};
