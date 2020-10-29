import {
  getHighlyRatedShows,
  getRecentlySearchedShows,
  getRandomShows,
} from 'apiEndpoints';
import { SeriesSearchForm } from 'components/SeriesSearch/SeriesSearchForm';
import { TvShowPosterSection } from 'components/TvShowPoster/TvShowPosterSection';
import { AppContext } from 'contexts/AppContext';
import { PREVIEW_SERIES_COUNT } from 'constants';
import React, { useEffect, useState, useContext } from 'react';
import { _ } from 'utils';

// http://localhost:8080/
export const HomePage = () => {
  const { setIsLoading } = useContext(AppContext);
  const [state, setState] = useState({
    topRated: [],
    recent: [],
    random: [],
  });

  const getData = async () => {
    const requests = [
      getHighlyRatedShows(PREVIEW_SERIES_COUNT),
      getRecentlySearchedShows(PREVIEW_SERIES_COUNT),
      getRandomShows(PREVIEW_SERIES_COUNT),
    ];
    setIsLoading(true);

    const responses = await Promise.all(requests);
    const [topRated, recent, random] = _.map(responses, (response) =>
      _.get(response, 'data.results'),
    );

    setState({ topRated, recent, random });
    setIsLoading(false);
  };

  useEffect(() => {
    getData();

    return () => {};
  }, []);

  return (
    <div className="home-page">
      <SeriesSearchForm />
      <TvShowPosterSection data={state.topRated} heading="Top Rated TV Shows" />
      <TvShowPosterSection data={state.recent} heading="Recently Searched" />
      <TvShowPosterSection data={state.random} heading="Random" />
    </div>
  );
};
