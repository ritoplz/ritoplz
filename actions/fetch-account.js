'use strict'

import api from './../services/api'

import { ACCOUNT_REQUEST, ACCOUNT_SUCCESS, ACCOUNT_ERROR } from './../constants'

export function accountRequest() {
  return {
    type: ACCOUNT_REQUEST
  }
}

export function accountSuccess(data) {
  return {
    type: ACCOUNT_SUCCESS,
    data
  }
}

export function accountError(error) {
  return {
    type: ACCOUNT_ERROR,
    error
  }
}

export function fetchAccount() {
  return dispatch => {
    dispatch(accountRequest())
    return api
      .get('/account')
      .then(res => dispatch(accountSuccess(res)))
      .catch(err => dispatch(accountError(err)))
  }
}
