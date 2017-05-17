'use strict'

import { PROFILE_REQUEST, PROFILE_SUCCESS, PROFILE_ERROR } from './../constants'

const initialState = {
  requesting: false,
  requested: false,
  data: {},
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_REQUEST:
      return {
        ...state,
        requesting: true
      }

    case PROFILE_SUCCESS:
      return {
        ...state,
        requesting: false,
        requested: true,
        data: action.data
      }

    case PROFILE_ERROR:
      return {
        ...state,
        requesting: false,
        requested: true,
        error: action.error
      }

    default:
      return state
  }
}
