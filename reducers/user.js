'use strict'

const user = (state = [], action) => {
  switch (action.type) {
    case 'REQUEST_POSTS':
      return state

    case 'RECEIVE_USER':
      console.log(action)
      return Object.assign({}, state, {
        user: action.user
      })

    default:
      return state
  }

}
