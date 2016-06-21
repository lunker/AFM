import { combineReducers } from 'redux';
import teamReducer from './TeamReducer';
import TeamFindReducer from './TeamFindReducer';
import UserReducer from './UserReducer';
import AppReducer from './AppReducer';


const rootReducer = combineReducers({
  teamReducer,
  TeamFindReducer,
  UserReducer
});

export default rootReducer;
