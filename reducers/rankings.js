'use strict'

import {
  RANKINGS_REQUEST,
  RANKINGS_SUCCESS,
  RANKINGS_ERROR
} from './../constants'

const initialState = {
  requesting: false,
  requested: false,
  data: {},
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case RANKINGS_REQUEST:
      return {
        ...state,
        requesting: true
      }

    case RANKINGS_SUCCESS:
      return {
        ...state,
        requesting: false,
        requested: true,
        data: action.data
      }

    case RANKINGS_ERROR:
      return {
        ...state,
        requesting: false,
        error: 'FUCK ME',
        data: {summoners: []}
      }

    default:
      return state
  }
}
