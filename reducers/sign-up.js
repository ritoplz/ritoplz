'use strict'

import * as types from './constants'

export default (state = {}, action) => {
  switch(action.type) {
    case types.SIGNUP_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
        isSigned: false,
        error: false
      })

    case types.SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isSigned: true,
        data: action.data,
        error: false
      })

    case types.SIGNUP_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        isSigned: false,
        data: action.data,
        error: true
      })

    default:
      return state
  }
}
