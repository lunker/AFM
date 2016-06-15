'use strict';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

const enhancer = compose(
  // Middleware you want to use in development:
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
);


export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    enhancer
  );
  return store
}
