'use strict'

import axios from 'axios'

import * as types from './../constants'

function addSummonerRequest () {
  return {
    type: types.ADD_SUMMONER_REQUEST
  }
}

function addSummonerSuccess (data) {
  return {
    type: types.ADD_SUMMONER_SUCCESS,
    data
  }
}

function addSummonerError (data) {
  return {
    type: types.ADD_SUMMONER_ERROR,
    data
  }
}

function handleAddSummoner (summoner) {
  return dispatch => {
    const localStorageRef = localStorage.getItem('token')
    dispatch(addSummonerRequest())
    return axios({
      method: 'post',
      url: 'https://staging.ritoplz.com/summoner',
      data: summoner,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorageRef
      }
    })
    .then(res => dispatch(addSummonerSuccess(res.data)))
    .catch(err => dispatch(addSummonerError(err.data)))
  }
}

export default handleAddSummoner
