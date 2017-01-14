'use strict'

import axios from 'axios'
import { getToken } from '../services/auth'

import {
  CONFIRM_SUMMONER_REQUEST,
  CONFIRM_SUMMONER_SUCCESS,
  CONFIRM_SUMMONER_ERROR
} from './../constants'

function confirmSummonerRequest () {
  return {
    type: CONFIRM_SUMMONER_REQUEST
  }
}

function confirmSummonerSuccess (data) {
  return {
    type: CONFIRM_SUMMONER_SUCCESS,
    data
  }
}

function confirmSummonerError (data) {
  return {
    type: CONFIRM_SUMMONER_ERROR,
    data
  }
}

function handleConfirmSummoner (summoner) {
  const data = {name: summoner}
  const token = getToken()

  return dispatch => {
    dispatch(confirmSummonerRequest())
    return axios({
      method: 'post',
      url: 'http://localhost:3001/summoner/confirm',
      data,
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    })
    .then(res => dispatch(confirmSummonerSuccess(res.data.confirmed)))
    .catch(err => dispatch(confirmSummonerError(err)))
  }
}

export default handleConfirmSummoner
