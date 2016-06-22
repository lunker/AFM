'use strict';

import * as types from '../constants/ActionTypes';

const Users=(state={
  isLogin: false,
  id: '',
  grade:'',
  position:'',
  isLoginModalOpened: false,
  isSignupModalOpened: false,
  isSignupFormModalOpened: false

}, action) =>{

  switch(action.type){

    case 'RESET_STATE':
    console.log('[RESET_STATE] USER_REDUCER')
    return Object.assign({},state,{
      isLogin: action.storedState.UserReducer.isLogin
    });

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
    console.log(action.result);
      if(action.result.result=='1'){
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

    case types.OPEN_LOGIN_MODAL:
    return Object.assign({},state,{
      isLoginModalOpened: true
    });

    case types.CLOSE_LOGIN_MODAL:
    return Object.assign({},state,{
      isLoginModalOpened: false
    });

    case types.OPEN_SIGNUP_MODAL:
    return Object.assign({},state,{
      isSignupModalOpened: true
    });
    case types.CLOSE_SIGNUP_MODAL:
    return Object.assign({},state,{
      isSignupModalOpened: false
    });

    case types.OPEN_SIGNUP_FORM_MODAL:
    return Object.assign({},state,{
      isSignupFormModalOpened: true
    });
    case types.CLOSE_SIGNUP_FORM_MODAL:
    return Object.assign({},state,{
      isSignupFormModalOpened: false
    });

    default :
      return state;
  }
};


export default Users;
