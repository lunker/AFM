'use strict';
import * as types from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';

/*
  ACTION CREATORS
 */
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
export function getTeams(){
  console.log('[ACTION][GET_TEAMS]');
  return dispatch =>{
    dispatch(requestTeam());
    return fetch('http://localhost:8888/teams',{
      method:'GET',
      headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
    .then(req=>req.json())
    .then(json=>dispatch(receiveTeams(json)));
  }
}

export function getTeamById(teamId){
  console.log('[ACITON][GET_TEAM]');
  return dispatch =>{
    dispatch(requestTeam());
    return fetch('http://localhost:8888/teams/'+teamId,{
      method:'GET',
      headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
    .then(req=>req.json())
    .then(json=>dispatch(receiveTeam(json)));
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
  console.log('[ACTION][RECEIVE_RESULT]');
  return {type:types.RECEIVE_RESULT, result};
}
function receiveTeam(team){
  console.log('[ACTION][RECEIVE_TEAM]');
  return {type:types.RECEIVE_TEAM, team: team};
}
function receiveTeams(teams){
  console.log('[ACTION][RECEIVE_TEAMS]');
  console.log(teams);
  return {type: types.RECEIVE_TEAMS, teams: teams};
}
