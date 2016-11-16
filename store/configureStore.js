'use strict'

import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'

const configureStore = initialState => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  )
}

export default configureStore
