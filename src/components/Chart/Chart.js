import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { TEpisodeData } from 'prop-types.d.js';
import { CHART_TYPES } from 'src/constants';
import { _, generateSeasonsChart, generateYearsChart } from 'src/utils';

import { ChartSquare } from './ChartSquare';

const { SEASON, YEAR } = CHART_TYPES;

export const Chart = ({
  data: chartInfo,
  setSidebarData,
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const [chartType, setChartType] = useState(SEASON);

  const onToggleChart = () => {
    const nextChartType = chartType === SEASON ? YEAR : SEASON;
    setChartType(nextChartType);
  };

  const view = {
    [SEASON]: generateSeasonsChart(chartInfo),
    [YEAR]: generateYearsChart(chartInfo),
  };

  const newChartInfo = view[chartType];
  const isVisible = !!chartInfo.length;

  return (
    <div className="chart">
      {isVisible ? (
        <React.Fragment>
          <div className="y-axis-label">{chartType}</div>
          <div className="x-axis-label">Episodes</div>
          <button onClick={onToggleChart}>Toggle</button>
        </React.Fragment>
      ) : null}
      <div className="chart-data">
        {_.map(newChartInfo, (info, index) => {
          const { data, type } = info;
          return (
            <ChartSquare
              key={index}
              type={type}
              data={data}
              onClick={() => {
                !isSidebarOpen && setIsSidebarOpen(true);
                setSidebarData(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

Chart.propTypes = {
  data: PropTypes.arrayOf(TEpisodeData),
  isSidebarOpen: PropTypes.bool,
  setSidebarData: PropTypes.func,
  setIsSidebarOpen: PropTypes.func,
};
