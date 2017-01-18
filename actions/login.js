'use strict'

import api from '../services/api'

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from '../constants'

function loginRequest () {
  return {
    type: LOGIN_REQUEST
  }
}

function loginSuccess (data) {
  return {
    type: LOGIN_SUCCESS,
    data
  }
}

function loginError (data) {
  return {
    type: LOGIN_ERROR,
    data
  }
}

function handleLogin (userData) {
  return dispatch => {
    dispatch(loginRequest())
    return api.post('/login', userData)
      .then(res => dispatch(loginSuccess(res)))
      .catch(err => dispatch(loginError(err.message)))
  }
}

export default handleLogin
