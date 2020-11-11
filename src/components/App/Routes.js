import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  ChartPage,
  ContributorsPage,
  ExamplePage,
  HomePage,
  NotFoundPage,
} from '../Pages';

export const Routes = () => {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contributors" component={ContributorsPage} />
        <Route
          path="/chart/:titleID"
          render={(props) => {
            return <ChartPage {...props} />;
          }}
        />
        <Route exact path="/example" component={ExamplePage} />
        <Route path="/" component={NotFoundPage} />
      </Switch>
    </div>
  );
};
