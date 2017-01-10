'use strict'

import { combineReducers } from 'redux'

import signUp from './sign-up'
import login from './login'
import account from './account'
import addSummoner from './add-summoner'
import rankings from './rankings'

export default combineReducers({
  signUp,
  login,
  account,
  addSummoner,
  rankings
})
