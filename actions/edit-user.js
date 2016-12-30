'use strict'

import axios from 'axios'

import {
  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  EDIT_USER_ERROR
} from './../constants'

function editUser () {
  return {
    type: EDIT_USER_REQUEST
  }
}

function editUserSuccess (data) {
  return {
    type: EDIT_USER_SUCCESS,
    data
  }
}

function editUserError (data) {
  return {
    type: EDIT_USER_ERROR,
    data
  }
}

function handleEditUser (token, user) {
  return dispatch => {
    dispatch(editUser())
    return axios({
      method: 'put',
      url: 'https://staging.ritoplz.com/account',
      data: user,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })
    .then(res => dispatch(editUserSuccess(res.data)))
    .catch(err => dispatch(editUserError(err.data)))
  }
}

export default handleEditUser
