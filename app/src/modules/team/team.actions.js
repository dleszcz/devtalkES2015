import {CALL_API} from 'redux-api-middleware';

import API from '../api';

const teamResource = API('teams');

export const TEAM_LIST_REQUEST = 'TEAM_LIST_REQUEST';
export const TEAM_LIST_SUCCESS = 'TEAM_LIST_SUCCESS';
export const TEAM_LIST_FAILURE = 'TEAM_LIST_FAILURE';

export function getTeamList(id) {
  return {
    [CALL_API]: teamResource.get(`competitions/${id}/teams`, {
      types: [TEAM_LIST_REQUEST, TEAM_LIST_SUCCESS, TEAM_LIST_FAILURE]
    })
  };
}

export const TEAM_REQUEST = 'TEAM_REQUEST';
export const TEAM_SUCCESS = 'TEAM_SUCCESS';
export const TEAM_FAILURE = 'TEAM_FAILURE';

export function getTeam(id) {
  return {
    [CALL_API]: teamResource.get(`${id}`, {
      types: [TEAM_REQUEST, TEAM_SUCCESS, TEAM_FAILURE]
    })
  };
}

export const TEAM_PLAYER_LIST_REQUEST = 'TEAM_PLAYER_LIST_REQUEST';
export const TEAM_PLAYER_LIST_SUCCESS = 'TEAM_PLAYER_LIST_SUCCESS';
export const TEAM_PLAYER_LIST_FAILURE = 'TEAM_PLAYER_LIST_FAILURE';

export function getTeamPlayerList(id) {
  return {
    [CALL_API]: teamResource.get(`${id}/players`, {
      types: [TEAM_PLAYER_LIST_REQUEST, TEAM_PLAYER_LIST_SUCCESS, TEAM_PLAYER_LIST_FAILURE]
    })
  };
}

export const TEAM_FIXTURES_REQUEST = 'TEAM_FIXTURES_REQUEST';
export const TEAM_FIXTURES_SUCCESS = 'TEAM_FIXTURES_SUCCESS';
export const TEAM_FIXTURES_FAILURE = 'TEAM_FIXTURES_FAILURE';

export function getTeamFixtures(id) {
  return {
    [CALL_API]: teamResource.get(`${id}/fixtures`, {
      types: [TEAM_FIXTURES_REQUEST, TEAM_FIXTURES_SUCCESS, TEAM_FIXTURES_FAILURE]
    })
  };
}
