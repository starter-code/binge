import React, { useState } from 'react';

import { getEpisodes } from '../../api/api';
import { Chart } from '../Chart/Chart';
import { SearchForm } from './SeriesSearchForm';

export const SeriesSearch = () => {
  const [chartInfo, setChartInfo] = useState([]);

  const onHandleSearchSubmit = async (searchRef) => {
    setChartInfo([]);

    const searchInput = searchRef.current.value;
    const { data } = await getEpisodes(searchInput);
    const { episodeData } = data;

    setChartInfo(episodeData);
    searchRef.current.value = '';
  };

  return (
    <div className="series-search">
      <h1>Search for your favorite tv series episode ratings</h1>
      <SearchForm onSubmit={onHandleSearchSubmit} />
      <Chart data={chartInfo} />
    </div>
  );
};
