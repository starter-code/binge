import { _ } from '../../Utils';
import React from 'react';

import { ChartSquare } from './ChartSquare';

export const Chart = ({ data: chartInfo }) => {
  return (
    <div className="chart">
      {_.map(chartInfo, (info, index) => {
        const { data, type } = info;
        return <ChartSquare key={index} type={type} data={data} />;
      })}
    </div>
  );
};
