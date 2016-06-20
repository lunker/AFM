'use strict';

import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import TeamPage from './components/Team/TeamPage';
import TeamMake from './components/Team/TeamMake';
import TeamInfo from './components/Team/TeamInfo';
import TeamFind from './components/Team/TeamFind';


export default (
  <Route path="/" component={App}>
    <Route path="team" component={TeamPage}>
      <Route path="newteam" component={TeamMake} />
    </Route>
    <Route path="teaminfo/:team_id" component={TeamInfo} />
    <Route path="teamfind" component={TeamFind} />
  </Route>
)
