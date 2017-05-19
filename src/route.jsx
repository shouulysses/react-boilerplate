import React from 'react';
import { Route } from 'react-router';
import App from './client/container/App';
import Homepage from './client/pages/homepage';
import About from './client/pages/about';

export default(
  <Route
    onChange={(prevState, nextState) => {
      if (nextState.location.action !== 'POP') window.scrollTo(0, 0);
    }}
    component={App}
  >
    <Route path="/" components={{ main: Homepage }} />
    <Route path="/about" components={{ main: About }} />
  </Route>
);
