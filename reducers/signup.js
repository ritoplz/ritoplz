'use strict'

import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_ERROR } from './../constants'

const initialState = {
  requesting: false,
  requested: false,
  data: {},
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return Object.assign({}, state, {
        requesting: true
      })

    case SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        requesting: false,
        requested: true,
        data: action.data
      })

    case SIGNUP_ERROR:
      return Object.assign({}, state, {
        requesting: false,
        requested: true,
        error: action.error
      })

    default:
      return state
  }
}
