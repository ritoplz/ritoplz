'use strict'

import api from './../services/api'

import {
  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  EDIT_USER_ERROR
} from './../constants'

function editUser() {
  return {
    type: EDIT_USER_REQUEST
  }
}

function editUserSuccess(data) {
  return {
    type: EDIT_USER_SUCCESS,
    data
  }
}

function editUserError(data) {
  return {
    type: EDIT_USER_ERROR,
    data
  }
}

function handleEditUser(user) {
  return dispatch => {
    dispatch(editUser())
    return api({
      method: 'put',
      url: '/account',
      data: user
    })
      .then(res => dispatch(editUserSuccess(res)))
      .catch(err => dispatch(editUserError(err.message)))
  }
}

export default handleEditUser
