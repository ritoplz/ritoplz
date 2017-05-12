'use strict'

import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR
} from './../constants'

const initialState = {
  requesting: false,
  requested: false,
  data: {},
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET_PASSWORD_REQUEST:
      return Object.assign({}, state, {
        requesting: true
      })

    case RESET_PASSWORD_SUCCESS:
      return Object.assign({}, state, {
        requesting: false,
        requested: true,
        data: action.data
      })

    case RESET_PASSWORD_ERROR:
      return Object.assign({}, state, {
        requesting: false,
        requested: true,
        error: action.error
      })

    default:
      return state
  }
}
