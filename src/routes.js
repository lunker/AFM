'use strict';

import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import TeamPage from './components/Team/TeamPage';
import TeamMake from './components/Team/TeamMake';
import TeamInfoPage from './components/Team/TeamInfoPage';
import TeamSearchPage from './components/Team/TeamSearchPage';
import SignupPage from './components/User/SignupPage';

export default (
  <Route path="/" component={App}>
    <Route path="team" component={TeamPage}>
      <Route path="newteam" component={TeamMake} />
    </Route>
    <Route path="teaminfo/:team_id" component={TeamInfoPage} />
    <Route path="teamsearch" component={TeamSearchPage} />
    <Route path='signup' component={SignupPage} />
  </Route>
)
