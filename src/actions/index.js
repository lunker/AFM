'use strict';
import * as types from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';

/*
  ACTION CREATORS
 */

/// action
/*
  팀생성
 */
export function makeNewTeam(team){

  console.log('[ACTION][ADD_TEAM]'+JSON.stringify(team));
  return dispatch =>{
    dispatch(requestTeam());
    return fetch('http://localhost:8888/team/newteam',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(team)
    })
    .then(req=>req.json())
    .then(json=>dispatch(receiveResult(json)));
  }
}

/*
 team 정보 가져옴
 */
export function fetchTeam(){
  return dispatch =>{
    dispatch(requestTeam());
    return fetch('URL').then(req=>req.json()).then(json=>dispatch());
  }
}

/*
 team 삭제
 */
export function deleteTeam(){
  return {type:types.DELETE_TEAM};
}

// state
/*
  요청중
 */
function requestTeam(){
  console.log('[ACTION][REQUEST_TEAM]');
 return {type:types.REQUEST_TEAM};
}
function receiveResult(result){
  return {type:types.RECEIVE_TEAM, result};
}
function receiveTeam(){
  console.log('[ACTION][REQUEST_TEAM]');
  return {};
}
