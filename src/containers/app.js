'use strict';

import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
// REDUX
import { createStore } from 'redux';
import { Provider, connect} from 'react-redux';

import NavBar from '../components/Frame/NavBar';

class App extends React.Component{

  render(){
    return(
      <div>
        <NavBar />
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
