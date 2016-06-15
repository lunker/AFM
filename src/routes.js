'use strict';

import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import TeamPage from './containers/TeamPage';

export default (
  <Route path="/" component={App}>
    <Route path="team" component={TeamPage}>
      <Route path="newteam" component={TeamMake}></Route>
    </Route>
  </Route>
)
