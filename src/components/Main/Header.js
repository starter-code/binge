import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header">
      <Link to={'/'}>
        <p className="home-link">Home</p>
      </Link>
    </header>
  );
};
