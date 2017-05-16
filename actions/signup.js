'use strict'

import api from './../services/api'

import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_ERROR } from './../constants'

export function signupRequest() {
  return {
    type: SIGNUP_REQUEST
  }
}

export function signupSuccess(data) {
  return {
    type: SIGNUP_SUCCESS,
    data
  }
}

export function signupError(error) {
  return {
    type: SIGNUP_ERROR,
    error
  }
}

export function onSignup(userData) {
  return dispatch => {
    dispatch(signupRequest())
    return api
      .post('/signup', userData)
      .then(res => dispatch(signupSuccess(res)))
      .catch(err => dispatch(signupError(err.message)))
  }
}
