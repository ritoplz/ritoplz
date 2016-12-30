'use strict'

import axios from 'axios'

import {
  RANKINGS_REQUEST,
  RANKINGS_SUCCESS,
  RANKINGS_ERROR
} from './../constants'

function rankingsRequest() {
  return {
    type: RANKINGS_REQUEST
  }
}

function rankingsSuccess(data) {
  return {
    type: RANKINGS_SUCCESS,
    data
  }
}

function rankingsError(data) {
  return {
    type: RANKINGS_ERROR,
    data
  }
}

function fetchRankings() {
  return dispatch => {
    dispatch(rankingsRequest())

    return axios.get('https://staging.ritoplz.com/rankings', {
      params: {
        country: 'BR'
      }
    })
    .then(({ data }) => dispatch(rankingsSuccess(data)))
    .catch(err => dispatch(rankingsError(err)))
  }
}

export default fetchRankings
