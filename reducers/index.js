'use strict'

import { combineReducers } from 'redux'

import signup from './signup'
import login from './login'
import account from './account'
import addSummoner from './add-summoner'
import deleteSummoner from './delete-summoner'
import rankings from './rankings'
import resetPassword from './reset-password'
import profile from './profile'
import profileSummoner from './profile-summoner'

export default combineReducers({
  signup,
  login,
  account,
  addSummoner,
  deleteSummoner,
  rankings,
  profile,
  resetPassword,
  profileSummoner
})
