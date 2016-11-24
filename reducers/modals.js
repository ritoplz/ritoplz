'use strict'

import * as types from './../constants'

const initialState = [
  {title: types.MODAL_ADD_SUMMONER, status: false},
  {title: types.MODAL_ADD_LOCATION, status: false}
]

export default (state = initialState, action) => {
  switch(action.type) {
    case types.OPEN_MODAL:
      const modal = state.map(modalType => {
        if (modalType.title === action.modal) {
          return {
            ...modalType,
            status: true
          }
        }

        return modalType
      })

      return modal

    default:
      return state
  }
}
