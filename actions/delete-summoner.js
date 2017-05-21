'use strict'

import api from './../services/api'

import {
  DELETE_SUMMONER_REQUEST,
  DELETE_SUMMONER_SUCCESS,
  DELETE_SUMMONER_ERROR
} from './../constants'

export function deleteSummonerRequest() {
  return {
    type: DELETE_SUMMONER_REQUEST
  }
}

export function deleteSummonerSuccess(data) {
  return {
    type: DELETE_SUMMONER_SUCCESS,
    data
  }
}

export function deleteSummonerError(error) {
  return {
    type: DELETE_SUMMONER_ERROR,
    error
  }
}

export function deleteSummoner(summonerId) {
  return dispatch => {
    dispatch(deleteSummonerRequest())
    return api({
      method: 'delete',
      url: `/account/summoner/${summonerId}`
    })
      .then(res => dispatch(deleteSummonerSuccess(res)))
      .catch(err => dispatch(deleteSummonerError(err)))
  }
}
