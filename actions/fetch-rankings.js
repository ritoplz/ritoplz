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

function rankingsError(err) {
  return {
    type: RANKINGS_ERROR,
    err
  }
}

function fetchRankings(params = { country: 'BR', state: undefined, city: undefined, limit: 100 }) {
  return dispatch => {
    dispatch(rankingsRequest())

    return axios({
      url: 'https://staging.ritoplz.com/rankings',
      params: {
        country: params.country,
        state: params.state,
        city: params.city,
        limit: params.limit
      }
    })
    .then(({ data }) => dispatch(rankingsSuccess(data)))
    .catch(err => dispatch(rankingsError(err)))
  }
}

export default fetchRankings
