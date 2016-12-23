'use strict'

import axios from 'axios'

import * as types from './../constants'

function userRequest() {
  return {
    type: types.USER_REQUEST
  }
}

function userSuccess(data) {
  return {
    type: types.USER_SUCCESS,
    data
  }
}

function userError(data) {
  return {
    type: types.USER_ERROR,
    data
  }
}

function fetchUser(userId) {
  return dispatch => {
    dispatch(userRequest())

    return axios.get(`http://localhost:3001/profile/${userId}`)
      .then(({ data }) => dispatch(userSuccess(data)))
      .catch(err => dispatch(userError(err)))
  }
}

export default fetchUser
