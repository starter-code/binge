import React, { useState } from 'react';

import { getEpisodes } from '../../api/api';
import { Chart } from '../Chart/Chart';
import { SearchForm } from './SearchForm';

export const SeriesSearch = () => {
  const [chartInfo, setChartInfo] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const resetInputValue = () => {
    setSearchValue('');
  };

  const searchFunction = async (event) => {
    event.preventDefault();
    setChartInfo([]);

    const {
      data: { results },
    } = await getEpisodes(searchValue);
    setChartInfo(results);

    resetInputValue();
  };

  return (
    <div className="">
      <SearchForm
        handleChange={handleSearchInputChange}
        handleSubmit={searchFunction}
        value={searchValue}
      />
      <Chart data={chartInfo} />
    </div>
  );
};
