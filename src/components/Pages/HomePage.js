import React, { useEffect, useState, useContext } from 'react';
import { getHighlyRatedEpisodes } from '../../api/api';
import { TVShowPoster } from '../Main/TvShowPoster';
import { SeriesSearchForm } from '../SeriesSearch/SeriesSearchForm';
import { LoadingContext } from '../../contexts/LoadingContext';
import { _ } from '../../utils';

// http://localhost:8080/
export const HomePage = () => {
  const { setIsLoading } = useContext(LoadingContext);
  const [episodesData, setEpisodesData] = useState([]);

  const getData = () => {
    const response = getHighlyRatedEpisodes(5);
    setIsLoading(true);
    response.then(({ data }) => {
      setEpisodesData(data.results);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getData();

    return () => {};
  }, []);

  return (
    <div>
      <SeriesSearchForm />
      <div className="tv-show-poster-section">
        {_.map(episodesData, (data, index) => (
          <TVShowPoster key={index} data={data} />
        ))}
      </div>
    </div>
  );
};
