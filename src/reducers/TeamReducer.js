'use strict';
import * as types from '../constants/ActionTypes';

// Team Reducer
const teams = (state=[], action) => {

  switch(action.type){
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
