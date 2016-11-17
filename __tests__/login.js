'use strict'

import test from 'ava'

import loginAction from '../actions/login'

test('login', t => {
  const data = {email: 'hi@ritoplz.com', password: 'monkey'}
  // hmmm... how do I test this? 🤔
  loginAction(data)
})
