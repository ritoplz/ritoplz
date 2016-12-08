'use strict'

import axios from 'axios'

import * as types from './../constants'

function editUser () {
  return {
    type: types.EDIT_USER_REQUEST
  }
}

function editUserSuccess (data) {
  return {
    type: types.EDIT_USER_SUCCESS,
    data
  }
}

function editUserError (data) {
  return {
    type: types.EDIT_USER_ERROR,
    data
  }
}

function handleEditUser (user) {
  return dispatch => {
    const localStorageRef = localStorage.getItem('token')
    dispatch(editUser())
    return axios({
      method: 'put', 
      url: 'http://35.164.57.55/account',
      data: user,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorageRef
      }
    })
    .then(res => dispatch(editUserSuccess(res.data)))
    .catch(res => dispatch(editUserError(res.data)))
  }
}

export default handleEditUser
