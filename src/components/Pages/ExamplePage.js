import React from 'react';
import { Chart } from '../Chart/Chart';
import { results } from '../Chart/op.json';

const data = results.slice(0, 50);

export const ExamplePage = () => {
  return (
    <div>
      <h3>This is the example page</h3>
      <Chart data={data} />
    </div>
  );
};

// http://localhost:8080/#/example
