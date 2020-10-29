import React, { useContext, useEffect, useState } from 'react';

import { apiEndpoints } from 'src/apiEndpoints';
import { AppContext } from 'src/contexts/AppContext';

import { Chart } from '../Chart/Chart';

// http://localhost:8080/#/chart/tt5753856
export const ChartPage = (props) => {
  const { setIsLoading } = useContext(AppContext);
  const [data, setData] = useState({ episodeData: [], metaData: {} });
  const { episodeData, metaData } = data;

  const getData = () => {
    setIsLoading(true);
    const response = apiEndpoints.getData(props.match.params.titleID);
    response.then(({ data }) => {
      setIsLoading(false);
      setData(data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>{metaData.title}</h2>
      <Chart data={episodeData} />
    </div>
  );
};
