'use strict'

import api from './../services/api'

import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR
} from './../constants'

export function resetPasswordRequest() {
  return {
    type: RESET_PASSWORD_REQUEST
  }
}

export function resetPasswordSuccess(data) {
  return {
    type: RESET_PASSWORD_SUCCESS,
    data
  }
}

export function resetPasswordError(error) {
  return {
    type: RESET_PASSWORD_ERROR,
    error
  }
}

export function resetPassword(data) {
  return dispatch => {
    dispatch(resetPasswordRequest())

    return api
      .post('/reset', data)
      .then(res => dispatch(resetPasswordSuccess(res)))
      .catch(err => dispatch(resetPasswordError(err)))
  }
}
