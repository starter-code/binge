import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { getTitleMatches } from 'src/apiEndpoints';
import { AppContext } from 'src/contexts/AppContext';
import { _ } from 'src/utils';

export const SeriesSearchForm = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { setIsLoading } = useContext(AppContext);

  const onHandleChange = _.debounce(async (text) => {
    setIsLoading(true);

    if (text.length) {
      const {
        data: { results },
      } = await getTitleMatches(text);

      results && results.length && setSearchResults(results);
    }

    setIsLoading(false);
  }, 250);

  const onHandleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <form className="search-form" onSubmit={onHandleSubmit}>
        <input
          placeholder="Search Series Here"
          type="text"
          onChange={(event) => onHandleChange(event.target.value)}
        />
      </form>
      <div className="search-results-overlay">
        {_.map(searchResults, (result, index) => {
          const {
            imageURL,
            numberOfEpisodes,
            title,
            titleID,
            seriesStartYear,
            seriesEndYear = 'Present',
          } = result;

          return (
            <div className="search-series-suggestion" key={index}>
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
        })}
      </div>
    </React.Fragment>
  );
};
