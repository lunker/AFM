'use strict';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

const enhancer = compose(
  // Middleware you want to use in development:
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
);

const createStoreWithMiddleware = compose(
  applyMiddleware(thunkMiddleware),
  enhancer
)(createStore);

export default function configureStore(initialState) {
  /*
  const store = createStore(
    rootReducer,
    preloadedState,
  );
  */
 return createStoreWithMiddleware(rootReducer, initialState)
}
