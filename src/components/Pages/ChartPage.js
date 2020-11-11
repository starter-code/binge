import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';

import { apiEndpoints } from 'src/apiEndpoints';
import { AppContext } from 'src/contexts/AppContext';
import { Header } from 'src/components/Main';

import { Chart } from '../Chart/Chart';

// http://localhost:8080/#/chart/tt5753856
export const ChartPage = ({ match }) => {
  const { setIsLoading } = useContext(AppContext);
  const [data, setData] = useState({ episodeData: [], metaData: {} });
  const { episodeData, metaData } = data;

  const getData = () => {
    setIsLoading(true);
    const response = apiEndpoints.getData(match.params.titleID);
    response.then(({ data }) => {
      setIsLoading(false);
      setData(data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="chart-page">
      <Header />
      <h2>{metaData.title}</h2>
      <Chart data={episodeData} />
    </div>
  );
};

ChartPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      titleID: PropTypes.string,
    }),
  }),
};
