'use strict'

import axios from 'axios'

import {
  ADD_SUMMONER_REQUEST,
  ADD_SUMMONER_SUCCESS,
  ADD_SUMMONER_ERROR
} from './../constants'

function addSummonerRequest () {
  return {
    type: ADD_SUMMONER_REQUEST
  }
}

function addSummonerSuccess (data) {
  return {
    type: ADD_SUMMONER_SUCCESS,
    data
  }
}

function addSummonerError (data) {
  return {
    type: ADD_SUMMONER_ERROR,
    data
  }
}

function handleAddSummoner (token, summoner) {
  return dispatch => {
    dispatch(addSummonerRequest())
    return axios({
      method: 'post',
      url: 'https://api.ritoplz.com/summoner',
      data: summoner,
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    })
    .then(res => dispatch(addSummonerSuccess(res.data)))
    .catch(err => dispatch(addSummonerError(err.response.data)))
  }
}

export default handleAddSummoner
