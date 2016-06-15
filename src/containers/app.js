'use strict';

import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
// REDUX
import { createStore } from 'redux';
import { Provider, connect} from 'react-redux';
// REDUCER
import appReducer from './reducers/index';
// REACT VIEW
import Main from './components/Main';
import NavBar from './components/Frame/NavBar';
import TeamPage from './components/Team/TeamPage';
import TeamMake from './components/Team/TeamMake';

class App extends React.Component{

  // generateComp(){
  //   console.log('generateComp');
  //   const {dispatch} = this.props;
  //   dispatch({type:'ADD_TEAM'});
  //
  //   return React.Children.map(this.props.children, child =>
  //    React.cloneElement(child, {
  //
  //    })
  //  );
  // }
  render(){
    return(
      <div>
        <div className='header'>
          <NavBar />
        </div>
        <div className='container'>
        {this.props.children}
          <div className='footer'>
            <h1>footer</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(App); // react ~ redux
