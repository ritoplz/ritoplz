'use strict'

import api from './../services/api'

import {
  RANKINGS_REQUEST,
  RANKINGS_SUCCESS,
  RANKINGS_ERROR
} from './../constants'

export function rankingsRequest() {
  return {
    type: RANKINGS_REQUEST
  }
}

export function rankingsSuccess(data) {
  return {
    type: RANKINGS_SUCCESS,
    data
  }
}

export function rankingsError(error) {
  return {
    type: RANKINGS_ERROR,
    error
  }
}

export function fetchRankings(params) {
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
