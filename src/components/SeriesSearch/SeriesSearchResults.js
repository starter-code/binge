import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { _ } from 'src/utils';

const SeriesSearchResult = ({
  imageURL,
  numberOfEpisodes,
  seriesEndYear,
  seriesStartYear,
  title,
  titleID,
}) => {
  return (
    <div className="search-series-suggestion">
      <Link to={`chart/${titleID}`}>
        <img
          className="search-series-img"
          alt="tv show poster image"
          src={imageURL}
        />
        <div className="series-search-info">
          <p className="search-series-title">
            {title} ({numberOfEpisodes})
          </p>
          <p className="search-series-year">
            {seriesStartYear}-{seriesEndYear}
          </p>
        </div>
      </Link>
    </div>
  );
};

SeriesSearchResult.propTypes = {
  imageURL: PropTypes.string,
  numberOfEpisodes: PropTypes.number,
  seriesEndYear: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  seriesStartYear: PropTypes.number,
  title: PropTypes.string,
  titleID: PropTypes.string,
};

export const SeriesSearchResults = ({ searchResults, isVisible }) => {
  const resultsClassNames = classNames('search-results-overlay', {
    visible: isVisible,
    hidden: !isVisible,
  });

  return (
    <div className={resultsClassNames}>
      {_.map(searchResults, (resultProps, index) => (
        <SeriesSearchResult
          seriesEndYear="Present"
          {...resultProps}
          key={index}
        />
      ))}
    </div>
  );
};

SeriesSearchResults.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.object),
  isVisible: PropTypes.bool,
};
