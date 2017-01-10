'use strict'

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import rootReducer from '../reducers'

const logger = createLogger()

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
