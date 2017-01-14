'use strict'

import axios from 'axios'

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

function fetchAccount(token) {
  return dispatch => {
    dispatch(accountRequest())
    return axios.get('https://api.ritoplz.com/account', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    })
    .then(res => dispatch(accountSuccess(res.data)))
    .catch(err => dispatch(accountError(err)))
  }
}

export default fetchAccount
