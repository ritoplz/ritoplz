'use strict'

import { combineReducers } from 'redux'

import signUp from './sign-up'
import login from './login'
import user from './user'
import addSummoner from './add-summoner'
import rankings from './rankings'

export default combineReducers({
  signUp,
  login,
  user,
  addSummoner,
  rankings
})
