'use strict'

import * as types from './../constants'

const initialState = {
  addSummoner: false,
  addLocation: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case types.OPEN_MODAL:
      return 'nice'

    default:
      return state
  }
}
