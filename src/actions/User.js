'use strict';

import * as types from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';

/*
  로그인
 */
export function login(user){
  console.log('[ACTION][DO_LOGIN]');
  return dispatch =>{
    dispatch(requestLogin());
    return fetch('http://localhost:8888/login',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(req=>req.json())
    .then(json=>dispatch(receiveLogin(json)));
  };
}

/*
  회원가입
 */
export function signup(user){
  console.log('[ACTION][DO_SIGNUP]');
  return dispatch =>{
    dispatch(requestLogin());
    return fetch('http://localhost:8888/signup',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(req=>req.json())
    .then(json=>dispatch(receiveSignup(json)));
  };
}



function requestLogin(){
  console.log('[ACTION][REQUEST_LOGIN]');
 return {type:types.REQUEST_LOGIN};
}

function receiveLogin(result){
  console.log('[ACTION][RECEIVE_LOGIN]');
 return {type:types.RECEIVE_LOGIN, result: result};
}

function requestSignup(){
  console.log('[ACTION][REQUEST_SIGNUP]');
 return {type:types.REQUEST_SIGNUP};
}

function receiveSignup(result){
  console.log('[ACTION][RECEIVE_SIGNUP]');
 return {type:types.RECEIVE_SIGNUP, result: result};
}
