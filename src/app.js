'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

// REDUX
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// REDUCER
import appReducer from './reducers/index';

// REACT VIEW
import Main from './components/Main';
import NavBar from './components/Frame/NavBar';
import TeamApp from './components/Team/TeamApp';

import TeamMake from './components/Team/TeamMake';

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
          {content}
        </div>
        <div className='footer'>
          <h1>footer</h1>
        </div>
      </div>
    );
  }
}

let store = createStore(appReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/team" components={{content : TeamApp}}></Route>
        <Route path="/team/make" components={{content : TeamMake}}></Route>
      </Route>
    </Router>
  </Provider>

  , document.getElementById('app'));
