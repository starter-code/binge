import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Chart } from '../Chart/Chart';
import SeriesSearch from '../SeriesSearch/SeriesSearch';

export const Routes = () => {
  return (
    <div className="page">
      <Switch>
        {/* <Route exact path="/" component={MainPage} /> */}
        {/* <Route exact path="/contributors" component={ContributorsPage} /> */}
        <Route exact path="/chart" component={Chart} />
        <Route exact path="/search" component={SeriesSearch} />
        {/* <Route path="/" component={NotFoundPage} /> */}
      </Switch>
    </div>
  );
};
