'use strict'

import api from './../services/api'

import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR
} from './../constants'

function resetPassowordRequest() {
  return {
    type: RESET_PASSWORD_REQUEST
  }
}

function resetPassowordSuccess(data) {
  return {
    type: RESET_PASSWORD_SUCCESS,
    data
  }
}

function resetPassowordError(error) {
  return {
    type: RESET_PASSWORD_ERROR,
    error
  }
}

function resetPassword(data) {
  return dispatch => {
    dispatch(resetPassowordRequest())

    return api
      .post('/reset', data)
      .then(res => dispatch(resetPassowordSuccess(res)))
      .catch(err => dispatch(resetPassowordError(err)))
  }
}

export default resetPassword
