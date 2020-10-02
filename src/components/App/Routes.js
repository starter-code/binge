import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage } from '../Pages/HomePage';
import { Chart } from '../Chart/Chart';
import { ChartWrapper } from '../Chart/ChartWrapper';
import { SeriesSearch } from '../SeriesSearch/SeriesSearch';
import { ExamplePage } from '../Pages/ExamplePage';
import { Header } from '../Main/Header';

export const Routes = () => {
  return (
    <div className="page">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route exact path="/contributors" component={ContributorsPage} /> */}
        <Route
          path="/chart/:titleID"
          render={(props) => {
            return <ChartWrapper {...props} />;
          }}
        />
        <Route exact path="/chart" component={Chart} />
        <Route exact path="/search" component={SeriesSearch} />
        <Route exact path="/example" component={ExamplePage} />
        {/* <Route path="/" component={NotFoundPage} /> */}
      </Switch>
    </div>
  );
};
