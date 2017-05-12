'use strict'

import api from './../services/api'

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from './../constants'

export function loginRequest() {
  return {
    type: LOGIN_REQUEST
  }
}

export function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    data
  }
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error
  }
}

export function handleLogin(data) {
  return dispatch => {
    dispatch(loginRequest())
    return api
      .post('/login', data)
      .then(res => dispatch(loginSuccess(res)))
      .catch(err => dispatch(loginError(err.message)))
  }
}
