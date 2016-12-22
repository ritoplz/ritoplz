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
    case types.RANKING_REQUEST:
      return {
        ...state,
        requesting: true
      }

    case types.RANKING_SUCCESS:
      return {
        ...state,
        requesting: false,
        requested: true,
        data: action.data
      }

    case types.RANKING_ERROR:
      return {
        ...state,
        requesting: false,
        error: action.data
      }

    default:
      return state
  }
}
