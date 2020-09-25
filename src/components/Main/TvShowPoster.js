import React from 'react';
import { Link } from 'react-router-dom';

export const TVShowPoster = ({ data }) => {
  return (
    <Link to={`chart/${data.titleID}`}>
      <img className="tv-show-poster-sm" src={data.imageURL}></img>;
    </Link>
  );
};
