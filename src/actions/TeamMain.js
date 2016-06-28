'use strict';
import * as types from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';



export function selectTeam(teamId){
  return {type: types.SELECT_TEAM, teamId: teamId};
}

export function getTeamLineup(teamId){

  console.log('[ACTION][GET_TEAM_LINEUP]');
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
  // return {type : types.REQUEST_TEAM_LINEUP, teamId: teamId};
}
