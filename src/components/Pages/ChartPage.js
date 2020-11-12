import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';

import { apiEndpoints } from 'src/apiEndpoints';
import { AppContext } from 'src/contexts/AppContext';
import { Header } from 'src/components/Main';

import { Chart } from '../Chart/Chart';
import { Sidebar } from '../Sidebar/Sidebar';

// http://localhost:8080/#/chart/tt5753856
export const ChartPage = ({ match }) => {
  const { setIsLoading } = useContext(AppContext);
  const [{ episodeData, metaData }, setData] = useState({
    episodeData: [],
    metaData: {},
  });
  const [sidebarData, setSidebarData] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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
      <Sidebar
        data={episodeData[sidebarData] || {}}
        onToggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />
      <Chart
        data={episodeData}
        setSidebarData={setSidebarData}
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />
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
