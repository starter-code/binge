import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="header">
      <Link to={'/'}>
        <p className="home-link">Home</p>
      </Link>
      <Link to={'/search'}>
        <p className="series-search-link">Search Rating</p>
      </Link>
    </div>
  );
};
