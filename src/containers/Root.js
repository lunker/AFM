'use stricts';

import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from '../routes';
import DevTools from './DevTools';
import store from '../stores/store';

export default class Root extends Component {
  render() {
    const Store = store();
    return (
      <Provider store={Store}>
        <div>
          <Router history={browserHistory} routes={routes} />
          <DevTools />
        </div>
      </Provider>
    )
  }
}
