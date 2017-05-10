'use strict'

import { combineReducers } from 'redux'

import signup from './signup'
import login from './login'
import account from './account'
import addSummoner from './add-summoner'
import rankings from './rankings'
import resetPassword from './reset-password'

export default combineReducers({
  signup,
  login,
  account,
  addSummoner,
  rankings,
  resetPassword
})
