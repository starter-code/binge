import PropTypes from 'prop-types';
import React from 'react';

import { TMetaData } from 'prop-types.d.js';
import { PREVIEW_SERIES_COUNT } from 'src/constants';
import { _ } from 'src/utils';

import { TVShowPoster } from './TvShowPoster';
import { TvShowPosterSkeleton } from './TvShowPosterSkeleton';

export const TvShowPosterSection = ({ data, heading }) => {
  return (
    <div>
      <h1>{heading}</h1>
      <div className="tv-show-poster-section">
        {data && !data.length && (
          <React.Fragment>
            {_.map([...Array(PREVIEW_SERIES_COUNT)], (_item, index) => (
              <TvShowPosterSkeleton key={index} />
            ))}
          </React.Fragment>
        )}
        {_.map(data, (tvShowPosterData, index) => (
          <TVShowPoster key={index} data={tvShowPosterData} />
        ))}
      </div>
    </div>
  );
};

TvShowPosterSection.propTypes = {
  data: PropTypes.arrayOf(TMetaData),
  heading: PropTypes.string,
};
