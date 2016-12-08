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
      url: 'http://35.164.57.55/summoner',
      data: summoner,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorageRef
      }
    })
    .then(res => dispatch(addSummonerSuccess(res.data)))
    .catch(res => dispatch(addSummonerError(res.data)))
  }
}

export default handleAddSummoner
