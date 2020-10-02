import React, { useState } from 'react';
import { getTitleMatches } from '../../api/api';
import { Link } from 'react-router-dom';
import _ from 'lodash';

export const SeriesSearchForm = () => {
  const [searchResults, setSearchResults] = useState([]);

  const onHandleChange = _.debounce(async (text) => {
    const {
      data: { results },
    } = await getTitleMatches(text);

    results && results.length && setSearchResults(results);
  }, 1000);

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
      <div id="search-results-overlay">
        {_.map(searchResults, (result, index) => {
          const {
            imageURL,
            numberOfEpisodes,
            title,
            titleID,
            seriesStartYear,
            seriesEndYear,
          } = result;

          return (
            <div key={index}>
              <Link to={`chart/${titleID}`}>
                <p>
                  {title} ({numberOfEpisodes})
                </p>
                <p>
                  {seriesStartYear}-{seriesEndYear}
                </p>
                <img src={imageURL} width={50} />
              </Link>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};
