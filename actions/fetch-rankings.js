'use strict'

import api from '../services/api'

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

function fetchRankings(params = { country: 'BR', state: undefined, city: undefined, limit: 50, skip: 0 }) {
  return dispatch => {
    dispatch(rankingsRequest())

    return api({
      url: '/rankings',
      params: {
        country: params.country,
        state: params.state,
        city: params.city,
        limit: params.limit,
        skip: params.skip,
        unrankeds: params.unrankeds
      }
    })
    .then(res => dispatch(rankingsSuccess(res)))
    .catch(err => dispatch(rankingsError(err)))
  }
}

export default fetchRankings
