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
      <SearchForm onSubmit={onHandleSearchSubmit} />
      <Chart data={chartInfo} />
    </div>
  );
};
