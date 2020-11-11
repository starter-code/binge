import React, { useContext, useEffect, useState } from 'react';

import {
  getHighlyRatedShows,
  getRandomShows,
  getRecentlySearchedShows,
} from 'src/apiEndpoints';
import { SeriesSearchForm } from 'src/components/SeriesSearch/SeriesSearchForm';
import { TvShowPosterSection } from 'src/components/TvShowPoster/TvShowPosterSection';
import { Footer, Header, Hero } from 'src/components/Main';
import { AppContext } from 'src/contexts/AppContext';
import { PREVIEW_SERIES_COUNT } from 'src/constants';
import { _ } from 'src/utils';

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
      <Hero />
      <Header />
      <SeriesSearchForm />
      <TvShowPosterSection data={state.topRated} heading="Top Rated TV Shows" />
      <TvShowPosterSection data={state.recent} heading="Recently Searched" />
      <TvShowPosterSection data={state.random} heading="Random" />
      <Footer />
    </div>
  );
};
