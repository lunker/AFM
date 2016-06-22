'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import TeamPage from './components/Team/TeamPage';
import TeamMake from './components/Team/TeamMake';
import TeamInfoPage from './components/Team/TeamInfoPage';
import TeamSearchPage from './components/Team/TeamSearchPage';
import SignupPage from './components/User/SignupPage';
// var TeamMain=require('./components/TeamMain/TeamMain.js');

import TeamMain from './components/TeamMain/TeamMain';
import TeamMainPage from './components/TeamMain/TeamMainPage';
import TeamFormation from './components/TeamMain/TeamFormation'
export default (
  <Route path="/" component={App}>
    <Route path="team" component={TeamPage}>
      <Route path="newteam" component={TeamMake} />
    </Route>
    <Route path="teaminfo/:team_id" component={TeamInfoPage} />
    <Route path="teamsearch" component={TeamSearchPage} />
    <Route path='signup' component={SignupPage} />
    <Route path='m' component={TeamMainPage}>
      <IndexRoute component={TeamMain}/>
      <Route path='formation' component={TeamFormation}></Route>
    </Route>
  </Route>
)
