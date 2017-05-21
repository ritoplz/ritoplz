'use strict'

import {
  SELECT_SUMMONER_REQUEST,
  SELECT_SUMMONER_SUCCESS,
  SELECT_SUMMONER_ERROR
} from './../constants'

const initialState = {
  selected: 0,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SUMMONER_REQUEST:
      return state

    case SELECT_SUMMONER_SUCCESS:
      return {
        ...state,
        selected: action.data
      }

    case SELECT_SUMMONER_ERROR:
      return {
        ...state,
        error: action.error
      }

    default:
      return state
  }
}
