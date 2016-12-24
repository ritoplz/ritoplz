'use strict'

import axios from 'axios'

import * as types from './../constants'

function rankingsRequest() {
  return {
    type: types.RANKINGS_REQUEST
  }
}

function rankingsSuccess(data) {
  return {
    type: types.RANKINGS_SUCCESS,
    data
  }
}

function rankingsError(data) {
  return {
    type: types.RANKINGS_ERROR,
    data
  }
}

function fetchRankings() {
  return dispatch => {
    dispatch(rankingsRequest())

    return axios.get('http://localhost:3001/rankings', {
      params: {
        country: 'BR'
      }
    })
    .then(data => dispatch(rankingsSuccess(res.data)))
    .catch(err => dispatch(rankingsError(err)))
  }
}

export default fetchRankings
