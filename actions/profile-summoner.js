'use strict'

import {
  SELECT_SUMMONER_REQUEST,
  SELECT_SUMMONER_SUCCESS,
  SELECT_SUMMONER_ERROR
} from './../constants'

export function selectSummonerRequest() {
  return {
    type: SELECT_SUMMONER_REQUEST
  }
}

export function selectSummonerSuccess(data) {
  return {
    type: SELECT_SUMMONER_SUCCESS,
    data
  }
}

export function selectSummonerError(error) {
  return {
    type: SELECT_SUMMONER_ERROR,
    error
  }
}

export function selectSummoner(index) {
  return dispatch => {
    dispatch(selectSummonerRequest())

    if (isNaN(index) === false && index >= 0) {
      return dispatch(selectSummonerSuccess(index))
    }

    dispatch(
      selectSummonerError({
        error: 'Summoner index should be a number and higher or equal zero'
      })
    )
  }
}
