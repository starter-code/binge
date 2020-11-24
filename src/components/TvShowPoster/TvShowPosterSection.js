import PropTypes from 'prop-types';
import React, { useContext } from 'react';

import { TMetaData } from 'prop-types.d.js';
import { PREVIEW_SERIES_COUNT } from 'src/constants';
import { AppContext } from 'src/contexts/AppContext';
import { Carousel } from 'src/components/Main';
import { _ } from 'src/utils';

import { TVShowPoster } from './TvShowPoster';
import { TvShowPosterSkeleton } from './TvShowPosterSkeleton';

export const TvShowPosterSection = ({ data, heading }) => {
  const { isLoading } = useContext(AppContext);
  return (
    <div>
      <h1>{heading}</h1>
      <div className="tv-show-poster-section">
        {isLoading ? (
          _.map([...new Array(PREVIEW_SERIES_COUNT)], (_item, index) => (
            <TvShowPosterSkeleton key={index} />
          ))
        ) : (
          <Carousel Component={TVShowPoster} data={data} />
        )}
      </div>
    </div>
  );
};

TvShowPosterSection.propTypes = {
  data: PropTypes.arrayOf(TMetaData),
  heading: PropTypes.string,
};
