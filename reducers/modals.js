'use strict'

import * as types from './../constants'

const initialState = [
  {title: 'addSummoner', status: false},
  {title: 'addLocation', status: false}
]

export default (state = initialState, action) => {
  switch(action.type) {
    case types.OPEN_MODAL:
      const nextState = state.map(modal => {
        if (modal.title === action.modal) {
          return {
            ...modal,
            status: true
          }
        }

        return modal
      })

      return nextState

    default:
      return state
  }
}
