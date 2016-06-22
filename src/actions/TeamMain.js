'use strict';
import * as types from '../constants/ActionTypes';

export function selectTeam(teamId){
  return {type: types.SELECT_TEAM, teamId: teamId};
}
