'use strict'

import api from './../services/api'

import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_ERROR } from './../constants'

function signupRequest() {
  return {
    type: SIGNUP_REQUEST
  }
}

function signupSuccess(data) {
  return {
    type: SIGNUP_SUCCESS,
    data
  }
}

function signupError(data) {
  return {
    type: SIGNUP_ERROR,
    data
  }
}

function handleSignup(userData) {
  return dispatch => {
    dispatch(signupRequest())
    return api
      .post('/signup', userData)
      .then(res => dispatch(signupSuccess(res)))
      .catch(err => dispatch(signupError(err.message)))
  }
}

export default handleSignup
