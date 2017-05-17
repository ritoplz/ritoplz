'use strict'

import api from './../services/api'

import { PROFILE_REQUEST, PROFILE_SUCCESS, PROFILE_ERROR } from './../constants'

export function profileRequest() {
  return {
    type: PROFILE_REQUEST
  }
}

export function profileSuccess(data) {
  return {
    type: PROFILE_SUCCESS,
    data
  }
}

export function profileError(error) {
  return {
    type: PROFILE_ERROR,
    error
  }
}

export function fetchProfile(username) {
  return dispatch => {
    dispatch(profileRequest())
    return api
      .get(`/profile/${username}`)
      .then(res => dispatch(profileSuccess(res)))
      .catch(err => dispatch(profileError(err)))
  }
}
