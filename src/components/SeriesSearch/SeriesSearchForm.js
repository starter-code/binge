import React, { useContext, useEffect, useRef, useState } from 'react';

import { getTitleMatches } from 'src/apiEndpoints';
import { AppContext } from 'src/contexts/AppContext';
import { _ } from 'src/utils';
import { SeriesSearchResults } from './SeriesSearchResults';

export const SeriesSearchForm = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { setIsLoading } = useContext(AppContext);

  const searchResultsRef = useRef(null);
  const searchInputRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, false);
    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = (event) => {
    const resultsRef = searchResultsRef.current;
    const inputRef = searchInputRef.current;

    if (
      !resultsRef.contains(event.target) &&
      !inputRef.contains(event.target)
    ) {
      setIsVisible(false);
    }
  };

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

  const onHandleFocus = () => {
    setIsVisible(true);
  };

  return (
    <div ref={searchResultsRef} onFocus={onHandleFocus}>
      <form
        className="search-form"
        onSubmit={onHandleSubmit}
        ref={searchInputRef}
      >
        <input
          placeholder="Search Series Here"
          type="text"
          onChange={(event) => onHandleChange(event.target.value)}
        />
      </form>
      <SeriesSearchResults
        searchResults={searchResults}
        isVisible={isVisible}
      />
    </div>
  );
};
