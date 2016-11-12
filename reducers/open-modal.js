'use strict'

export default (state = [], action) => {
  switch(action.type) {
    case 'OPEN_SUMMONERS_MODAL':
      return state.map((modal, index) => {
        if (index === action.index) {
          return Object.assign({}, modal, {
            open: true
          })
        }

        return modal
      })

    default:
      return state
  }
}
