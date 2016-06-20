'use strict';

import * as types from '../constants/ActionTypes';

// Team Reducer
const TeamFindReducer = (state={
  isFetching: false,
  results:[]
}, action) => {

  switch(action.type){

    case types.REQUEST_TEAM:
      console.log('[REDUCER][REQUEST_TEAM]');
      return Object.assign({},state,{
        isFetching:true
      });

    case types.RECEIVE_TEAMS:
      console.log('[REDUCER][RECEIVE_TEAMS]');
      return Object.assign({}, state, {
        items: action.teams,
        isFetching: false
      });

    default :
      return state;
  }
}// end teams

export default TeamFindReducer;
