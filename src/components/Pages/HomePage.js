import React, { useEffect, useState, useContext } from 'react';
import { TvShowPosterSkeleton } from '../Main/TvShowPosterSkeleton';
import { TVShowPoster } from '../Main/TvShowPoster';
import { SeriesSearchForm } from '../SeriesSearch/SeriesSearchForm';
import { AppContext } from '../../contexts/AppContext';
import { getHighlyRatedEpisodes } from '../../api/api';
import { PREVIEW_SERIES_COUNT } from '../../constants/constants';
import { _ } from '../../utils';

// http://localhost:8080/
export const HomePage = () => {
  const { setIsLoading } = useContext(AppContext);
  const [tvPosterData, setTvPosterData] = useState([]);

  const getData = () => {
    const response = getHighlyRatedEpisodes(PREVIEW_SERIES_COUNT);
    setIsLoading(true);
    response.then(({ data }) => {
      setTvPosterData(data.results);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getData();

    return () => {};
  }, []);

  return (
    <div className="home-page">
      <SeriesSearchForm />
      <div className="tv-show-poster-section">
        {tvPosterData && !tvPosterData.length && (
          <React.Fragment>
            {[...Array(PREVIEW_SERIES_COUNT)].map((item, index) => {
              return <TvShowPosterSkeleton key={index} />;
            })}
          </React.Fragment>
        )}
        {_.map(tvPosterData, (data, index) => (
          <TVShowPoster key={index} data={data} />
        ))}
      </div>
    </div>
  );
};
