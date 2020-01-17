import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import PianoPage from './containers/PianoPage';
import CounterPage from './containers/CounterPage';

export default () => (
  <App>
    <Switch>
      <Route path={routes.COUNTER} component={CounterPage} />
      <Route path={routes.PIANO} component={PianoPage} />
      <Route path={routes.HOME} component={HomePage} />
    </Switch>
  </App>
);
