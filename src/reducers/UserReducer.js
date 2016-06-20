'use strict';

import * as types from '../constants/ActionTypes';

const Users=(state={
  isLogin: false,
  id: ''
}, action) =>{

  switch(action.type){

    case types.LOGED_IN:
      return Object.assign({},state,{
        isLogin: true
      });

    case types.NOT_LOGED_IN:
      return Object.assign({},state,{
        isLogin: false
      });

    case types.REQUEST_LOGIN:
      return Object.assign({},state,{

      });

    case types.RECEIVE_LOGIN:
      if(action.result=='1'){
        return Object.assign({},state,{
          isLogin:true
        });
      }

    case types.REQUEST_SIGNUP:
    return Object.assign({},state,{

    });

    case types.RECEIVE_SIGNUP:
    return Object.assign({},state,{

    });


    default :
      return state;
  }
};


export default Users;
