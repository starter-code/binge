import React, { useEffect, useState } from 'react';
import { getHighlyRatedEpisodes } from '../../api/api';
import { TVShowPoster } from '../Main/TvShowPoster';
import { _ } from '../../utils';

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
      This is the home page
      <div className="tv-show-poster-section">
        {_.map(episodesData, (data, index) => (
          <TVShowPoster key={index} data={data} />
        ))}
      </div>
    </div>
  );
};
