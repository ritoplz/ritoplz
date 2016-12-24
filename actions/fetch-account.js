'use strict'

import axios from 'axios'

import * as types from './../constants'

function accountRequest() {
  return {
    type: types.ACCOUNT_REQUEST
  }
}

function accountSuccess(data) {
  return {
    type: types.ACCOUNT_SUCCESS,
    data
  }
}

function accountError(data) {
  return {
    type: types.ACCOUNT_ERROR,
    data
  }
}

function fetchAccount(localStorageRef) {
  return dispatch => {
    dispatch(accountRequest())
    return axios.get('http://localhost:3001/account', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorageRef
      }
    })
    .then(({ data }) => dispatch(accountSuccess(data)))
    .catch(err => dispatch(accountError(err)))
  }
}

export default fetchAccount
