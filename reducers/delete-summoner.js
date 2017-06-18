'use strict'

import {
  DELETE_SUMMONER_REQUEST,
  DELETE_SUMMONER_SUCCESS,
  DELETE_SUMMONER_ERROR
} from './../constants'

const initialState = {
  requesting: false,
  requested: false,
  data: '',
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_SUMMONER_REQUEST:
      return {
        ...state,
        requesting: true
      }

    case DELETE_SUMMONER_SUCCESS:
      return {
        ...state,
        requesting: false,
        requested: true,
        data: action.data
      }

    case DELETE_SUMMONER_ERROR:
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
