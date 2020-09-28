import React, { useState, useEffect } from 'react';
import { Chart } from './Chart';
import { getEpisodes } from '../../api/api';

export const ChartWrapper = (props) => {
  const [data, setData] = useState([]);

  const getData = () => {
    const response = getEpisodes(props.match.params.titleID);
    response.then(({ data }) => setData(data.episodeData));
  };

  useEffect(() => {
    getData();
  }, []);

  return <Chart data={data} />;
};
