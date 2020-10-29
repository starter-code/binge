import React, { useState } from 'react';
import { generateSeasonsChart, generateYearsChart, _ } from 'utils';

import { ChartSquare } from './ChartSquare';
import { CHART_TYPES } from '../../constants/constants';

const { SEASON, YEAR } = CHART_TYPES;

export const Chart = ({ data: chartInfo }) => {
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
          <div className="y-axis-label">Seasons</div>
          <div className="x-axis-label">Episodes</div>
          <button onClick={onToggleChart}>Toggle</button>
        </React.Fragment>
      ) : null}
      <div className="chart-data">
        {_.map(newChartInfo, (info, index) => {
          const { data, type } = info;
          return <ChartSquare key={index} type={type} data={data} />;
        })}
      </div>
    </div>
  );
};
