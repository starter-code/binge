import React, { useState, useEffect, useContext } from 'react';
import { Chart } from '../Chart/Chart';
import { getEpisodes } from '../../api/api';
import { AppContext } from '../../contexts/AppContext';

// http://localhost:8080/#/chart/tt5753856
export const ChartPage = (props) => {
  const { setIsLoading } = useContext(AppContext);
  const [data, setData] = useState([]);

  const getData = () => {
    setIsLoading(true);
    const response = getEpisodes(props.match.params.titleID);
    response.then(({ data }) => {
      setIsLoading(false);
      setData(data.episodeData);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return <Chart data={data} />;
};
