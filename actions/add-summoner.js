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
    dispatch(addSummonerRequest())
    return axios.post('http://localhost:3001/summoner', summoner)
      .then(res => dispatch(addSummonerSuccess(res)))
      .catch(res => dispatch(addSummonerError(res)))
  }
}

export default handleAddSummoner
