'use strict'

import { createStore, applyMiddleware, compose } from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'

const configureStore = initialState => {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : f => f
    )
  )
}

export default configureStore
