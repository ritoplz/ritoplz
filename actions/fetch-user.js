'use strict'

import axios from 'axios'

import * as types from './../constants'

function userRequest() {
  return {
    type: types.USER_REQUEST
  }
}

function userSuccess(data) {
  return {
    type: types.USER_SUCCESS,
    data
  }
}

function userError(data) {
  return {
    type: types.USER_ERROR,
    data
  }
}

function fetchUser(localStorageRef) {
  return dispatch => {
    dispatch(userRequest())
    return axios.get('https://staging.ritoplz.com/account', {
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': localStorageRef
      }
    })
    .then(res => dispatch(userSuccess(res.data)))
    .catch(res => dispatch(userError(res)))
  }
}

export default fetchUser
