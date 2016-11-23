'use strict'

import * as types from './../constants'

const initialState = {
  requesting: false,
  requested: false,
  data: {},
  error: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case types.SIGNUP_REQUEST:
      return {
        ...state,
        requesting: true
      }

    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        requesting: false,
        requested: true,
        data: action.data
      }

    case types.SIGNUP_ERROR:
      return {
        ...state,
        requesting: false,
        error: action.data
      }

    default:
      return state
  }
}
