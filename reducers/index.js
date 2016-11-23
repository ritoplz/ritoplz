'use strict'

import { combineReducers } from 'redux'

import signUp from './sign-up'
import login from './login'
import user from './user'

export default combineReducers({
  signUp,
  login,
  user
})
