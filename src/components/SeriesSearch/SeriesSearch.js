import React, { useState } from 'react';

import { getEpisodes } from '../../api/api';
import { Chart } from '../Chart/Chart';
import { SearchForm } from './SearchForm';

export const SeriesSearch = () => {
  const [chartInfo, setChartInfo] = useState([]);

  const searchFunction = async (searchValue) => {
    setChartInfo([]);

    const {
      data: { results },
    } = await getEpisodes(searchValue);
    setChartInfo(results);
  };

  return (
    <div className="series-search">
      <SearchForm onSubmit={searchFunction} />
      <Chart data={chartInfo} />
    </div>
  );
};
