'use strict'

import * as types from './../constants'

const initialState = {
  addSummoner: false,
  addLocation: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case types.OPEN_MODAL:
      const nextState = if (state.hasOwnProperty(action.modal)) {
        return state
      }
      console.log(nextState)

      return 'nice'

    default:
      return state
  }
}
