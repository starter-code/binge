import React from 'react';
import { Chart } from '../Chart/Chart';
import { results } from '../../example-data/op.json';

const data = results.slice(0, 930);

// http://localhost:8080/#/example
export const ExamplePage = () => {
  return (
    <div>
      <h3>This is the example page</h3>
      <Chart data={data} />
    </div>
  );
};
