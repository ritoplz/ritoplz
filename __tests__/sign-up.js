'use strict'

import test from 'ava'

import signUpAction from '../actions/sign-up'

test('sign up', t => {
  const data = {name: 'ritoplz', email: 'hi@ritoplz.com', password: 'monkey'}
  // hmmm... how do I test this? 🤔
  signUpAction(data)
})
