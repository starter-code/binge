import React, { useEffect, useState } from 'react';
import { getHighlyRatedEpisodes } from '../../api/api';
import { TVShowPoster } from '../Main/TvShowPoster';
import { SeriesSearchForm } from '../SeriesSearch/SeriesSearchForm';
import { _ } from '../../utils';

// http://localhost:8080/
export const HomePage = () => {
  const [episodesData, setEpisodesData] = useState([]);

  const getData = () => {
    const response = getHighlyRatedEpisodes(5);
    response.then(({ data }) => setEpisodesData(data.results));
  };

  useEffect(() => {
    getData();
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
