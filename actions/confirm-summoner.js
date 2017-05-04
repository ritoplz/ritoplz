'use strict'

import api from './../services/api'

import {
  CONFIRM_SUMMONER_REQUEST,
  CONFIRM_SUMMONER_SUCCESS,
  CONFIRM_SUMMONER_ERROR
} from './../constants'

function confirmSummonerRequest() {
  return {
    type: CONFIRM_SUMMONER_REQUEST
  }
}

function confirmSummonerSuccess(data) {
  return {
    type: CONFIRM_SUMMONER_SUCCESS,
    data
  }
}

function confirmSummonerError(data) {
  return {
    type: CONFIRM_SUMMONER_ERROR,
    data
  }
}

function handleConfirmSummoner(summoner) {
  const data = { name: summoner }

  return dispatch => {
    dispatch(confirmSummonerRequest())
    return api({
      method: 'post',
      url: '/summoner/confirm',
      data
    })
      .then(res => dispatch(confirmSummonerSuccess(res.confirmed)))
      .catch(err => dispatch(confirmSummonerError(err.message)))
  }
}

export default handleConfirmSummoner
