import { combineReducers } from 'redux';
import teamReducer from './TeamReducer';
import TeamFindReducer from './TeamFindReducer';

const rootReducer = combineReducers({
  teamReducer,
  TeamFindReducer
});

export default rootReducer;
