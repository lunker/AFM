'use strict';
import * as types from '../constants/ActionTypes';
/*
  ACTION CREATORS
 */
export function addTeam(){
  return {type:types.ADD_TEAM};
}

export function deleteTeam(){
  return {type:types.DELETE_TEAM};
}
