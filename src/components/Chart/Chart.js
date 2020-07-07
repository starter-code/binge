import { _ } from '../../utils';
import React, { useState } from 'react';

import { ChartSquare } from './ChartSquare';
import { generateSeasonsChart, generateYearsChart } from './ChartHelpers';
import { CHART_TYPES } from '../../constants/constants';

export const Chart = ({ data: chartInfo }) => {
  const [chartType, setChartType] = useState(CHART_TYPES.SEASON);

  const onToggleChart = () => {
    const newChartType =
      chartType === CHART_TYPES.SEASON ? CHART_TYPES.YEAR : CHART_TYPES.SEASON;
    setChartType(newChartType);
  };

  const view = {
    [CHART_TYPES.SEASON]: generateSeasonsChart(chartInfo),
    [CHART_TYPES.YEAR]: generateYearsChart(chartInfo),
  };

  const newChartInfo = view[chartType];
  const isVisible = !!chartInfo.length;

  return (
    <div className="chart">
      {isVisible ? <div className="y-axis-label">Seasons</div> : null}
      {isVisible ? <div className="x-axis-label">Episodes</div> : null}
      <button onClick={onToggleChart}>Toggle</button>
      <div className="chart-data">
        {_.map(newChartInfo, (info, index) => {
          const { data, type } = info;
          return <ChartSquare key={index} type={type} data={data} />;
        })}
      </div>
    </div>
  );
};
