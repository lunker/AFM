'use strict';

import * as types from '../constants/ActionTypes';

const AppReducer = (state={

}, action) => {

  switch(action.type){

    case 'RESET_STATE':
      console.log('[REDUCER][REQUEST_TEAM]');
      return Object.assign({},state,{
        isFetching:true
      });

    default :
      return state;
  }
}// end teams

export default AppReducer;
