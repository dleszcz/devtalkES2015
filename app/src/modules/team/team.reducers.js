import {fromJS} from 'immutable';
import createReducer from 'create-reducer';
import {TEAM_LIST_SUCCESS, TEAM_SUCCESS, TEAM_PLAYER_LIST_SUCCESS, TEAM_FIXTURES_SUCCESS} from './team.actions.js';

const initialState = fromJS({
  list: [],
  single: {},
  players: [],
  fixtures: {}
});

export const teamReducer = createReducer(initialState, {
  [TEAM_LIST_SUCCESS](state, {payload}) {
    return state.merge({
      list: payload
    });
  },
  [TEAM_SUCCESS](state, {payload}) {
    return state.setIn(['single'], payload);
  },
  [TEAM_PLAYER_LIST_SUCCESS](state, {payload}) {
    return state.setIn(['players'], payload);
  },
  [TEAM_FIXTURES_SUCCESS](state, {payload}) {
    return state.setIn(['fixtures'], payload);
  }
});
