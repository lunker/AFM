'use strict';

import * as types from '../constants/ActionTypes';

// Team Reducer
const TeamMainReducer = (state={

  teamId: ''

}, action) => {

  switch(action.type){

    case types.SELECT_TEAM:
    return Object.assign({},state,{
      teamId: action.id
    });

    default :
      return state;
  }
};

export default TeamMainReducer;
