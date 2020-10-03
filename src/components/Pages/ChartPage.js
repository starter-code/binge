import React, { useState, useEffect } from 'react';
import { Chart } from '../Chart/Chart';
import { getEpisodes } from '../../api/api';

// http://localhost:8080/#/chart/tt5753856
export const ChartPage = (props) => {
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
