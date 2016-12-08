'use strict'

import axios from 'axios'

import * as types from './../constants'

function signupRequest () {
  return {
    type: types.SIGNUP_REQUEST
  }
}

function signupSuccess (data) {
  return {
    type: types.SIGNUP_SUCCESS,
    data
  }
}

function signupError (data) {
  return {
    type: types.SIGNUP_ERROR,
    data
  }
}

function handleSignup (userData) {
  return dispatch => {
    dispatch(signupRequest())
    return axios.post('http://35.164.57.55/signup', userData)
      .then(res => dispatch(signupSuccess(res.data)))
      .catch(res => dispatch(signupError(res.response.data.msg)))
  }
}

export default handleSignup
