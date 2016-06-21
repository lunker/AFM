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


export function openLoginModal(){
  console.log('[ACTION][OPEN_LOGIN_MODAL]');
  return {type:types.OPEN_LOGIN_MODAL};
}
export function closeLoginModal(){
  console.log('[ACTION][CLOSE_LOGIN_MODAL]');
  return {type:types.CLOSE_LOGIN_MODAL};
}
export function openSignupModal(){
  console.log('[ACTION][OPEN_SIGNUP_MODAL]');
  return {type:types.OPEN_SIGNUP_MODAL};
}
export function closeSignupModal(){
  console.log('[ACTION][CLOSE_SIGNUP_MODAL]');
  return {type:types.CLOSE_SIGNUP_MODAL};
}
export function OPEN_SIGNUP_FORM_MODAL(){
  console.log('[ACTION][OPEN_SIGNUP_FORM_MODAL]');
  return {type:types.OPEN_SIGNUP_FORM_MODAL};
}
export function closelSignupFormModal(){
  console.log('[ACTION][CLOSE_SIGNUP_FORM_MODAL]');
  return {type:types.CLOSE_SIGNUP_FORM_MODAL};
}


function requestLogin(){
  console.log('[ACTION][REQUEST_LOGIN]');
 return {type:types.REQUEST_LOGIN};
}

function receiveLogin(result){
  console.log('[ACTION][RECEIVE_LOGIN]');
  console.log(result);
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
