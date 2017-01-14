'use strict'

import {
  ADD_SUMMONER_REQUEST,
  ADD_SUMMONER_SUCCESS,
  ADD_SUMMONER_ERROR
} from './../constants'

const initialState = {
  requesting: false,
  requested: false,
  data: '',
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_SUMMONER_REQUEST:
      return {
        ...state,
        requesting: true
      }

    case ADD_SUMMONER_SUCCESS:
      return {
        ...state,
        requesting: false,
        requested: true,
        data: action.data
      }

    case ADD_SUMMONER_ERROR:
      return {
        ...state,
        requesting: false,
        error: action.data
      }

    default:
      return state
  }
}
