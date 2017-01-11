'use strict'

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from './../constants'

const initialState = {
  requesting: false,
  requested: false,
  data: {},
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        requesting: true
      })

    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        requesting: false,
        requested: true,
        data: action.data
      })

    case LOGIN_ERROR:
      return Object.assign({}, state, {
        requesting: false,
        error: action.data
      })

    default:
      return state
  }
}
