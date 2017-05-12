'use strict'

import api from './../services/api'

import {
  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  EDIT_USER_ERROR
} from './../constants'

export function editUserRequest() {
  return {
    type: EDIT_USER_REQUEST
  }
}

export function editUserSuccess(data) {
  return {
    type: EDIT_USER_SUCCESS,
    data
  }
}

export function editUserError(error) {
  return {
    type: EDIT_USER_ERROR,
    error
  }
}

export function editUser(user) {
  return dispatch => {
    dispatch(editUserRequest())
    return api({
      method: 'put',
      url: '/account',
      data: user
    })
      .then(res => dispatch(editUserSuccess(res)))
      .catch(err => dispatch(editUserError(err.message)))
  }
}
