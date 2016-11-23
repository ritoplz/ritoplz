'use strict'

import { combineReducers } from 'redux'

import signUp from './sign-up'
import login from './login'
import user from './user'
import modals from './modals'

export default combineReducers({
  signUp,
  login,
  user,
  modals
})
