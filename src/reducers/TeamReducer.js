'use strict';

import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';

// Team Reducer
const teams = (state={
  isFetching: false
}, action) => {

  switch(action.type){

    case types.REQUEST_TEAM:
      console.log('[REDUCER][REQUEST_TEAM]');
      return Object.assign({},state,{
        isFetching:true
      });

    case types.RECEIVE_TEAM:
      console.log('[REDUCER][RECEIVE_TEAM]');
      return Object.assign({}, state, {
        isFetching: false
      });

    case types.ADD_TEAM:
      console.log('wow!!!');
      return {

      };
    case types.DELETE_TEAM:
      return {

      };
    default :
      return state;
  }
}// end teams

export default teams;
