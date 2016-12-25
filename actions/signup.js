'use strict'

import axios from 'axios'

import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from '../../constants'

function signupRequest () {
  return {
    type: SIGNUP_REQUEST
  }
}

function signupSuccess (data) {
  return {
    type: SIGNUP_SUCCESS,
    data
  }
}

function signupError (data) {
  return {
    type: SIGNUP_ERROR,
    data
  }
}

function handleSignup (userData) {
  return dispatch => {
    dispatch(signupRequest())
    return axios.post('http://localhost:3001/signup', userData)
      .then(({ data }) => dispatch(signupSuccess(data)))
      .catch(err => dispatch(signupError(err.response.data.msg)))
  }
}

export default handleSignup
