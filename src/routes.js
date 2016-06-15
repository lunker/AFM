'use strict';

import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import TeamPage from './components/Team/TeamPage';
import TeamMake from './components/Team/TeamMake';
import TeamInfo from './components/Team/TeamInfo';

export default (
  <Route path="/" component={App}>
    <Route path="/team" component={TeamPage}>
      <Route path="newteam" component={TeamMake} />
      <Route path="teaminfo" component={TeamInfo} />
    </Route>
  </Route>
)
