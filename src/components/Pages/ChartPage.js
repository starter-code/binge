import React, { useState, useEffect, useContext } from 'react';
import { Chart } from '../Chart/Chart';
import { getEpisodes } from '../../api/api';
import { LoadingContext } from '../../contexts/LoadingContext';

// http://localhost:8080/#/chart/tt5753856
export const ChartPage = (props) => {
  const { setIsLoading } = useContext(LoadingContext);
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
