'use strict'

import { createStore } from 'redux'

import rootReducer from '../reducers'

const configureStore = initialState => {
  return createStore(rootReducer, initialState)
}

export default configureStore
