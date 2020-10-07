import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// 'test' and 'expect' are not defined
// eslint-disable-next-line
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  // eslint-disable-next-line
  expect(linkElement).toBeInTheDocument();
});
