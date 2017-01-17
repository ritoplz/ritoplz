'use strict'

import api from '../services/api'

import {
  ACCOUNT_REQUEST,
  ACCOUNT_SUCCESS,
  ACCOUNT_ERROR
} from './../constants'

function accountRequest() {
  return {
    type: ACCOUNT_REQUEST
  }
}

function accountSuccess(data) {
  return {
    type: ACCOUNT_SUCCESS,
    data
  }
}

function accountError(data) {
  return {
    type: ACCOUNT_ERROR,
    data
  }
}

function fetchAccount() {
  return dispatch => {
    dispatch(accountRequest())
    return api.get('/account')
    .then(res => dispatch(accountSuccess(res)))
    .catch(err => dispatch(accountError(err)))
  }
}

export default fetchAccount
