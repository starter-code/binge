import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export const TVShowPoster = ({ data }) => {
  return (
    <Link to={`chart/${data.titleID}`}>
      <img
        alt={`Poster Image of ${data.title}`}
        className="tv-show-poster-sm"
        src={data.imageURL}
      ></img>
    </Link>
  );
};

TVShowPoster.propTypes = {
  data: PropTypes.shape({
    titleID: PropTypes.string,
    title: PropTypes.string,
    imageURL: PropTypes.string,
  }),
};
