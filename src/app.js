'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import Team from './components/Team/Team';
import NavBar from './components/Frame/NavBar';
import NewTeam from './components/Team/NewTeam';


import { Router, Route, Link, browserHistory } from 'react-router';

class App extends React.Component{
  render(){
    const {content}=this.props;
    return(
      <div>
        <div className='header'>
          <NavBar />
        </div>
        <div className='body'>
        
          <NewTeam />
        </div>
        <div className='footer'>
          <h1>footer</h1>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/team" components={{content : Team}}></Route>
    </Route>
  </Router>
  , document.getElementById('app'));
