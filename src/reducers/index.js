import { combineReducers } from 'redux';
import teamReducer from './TeamReducer';

const appReducer = combineReducers({
  teamReducer
});

export default appReducer;
