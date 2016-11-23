'use strict'

import { combineReducers } from 'redux'

import signUp from './sign-up'
import user from './user'

export default combineReducers({
  signUp,
  user
})
