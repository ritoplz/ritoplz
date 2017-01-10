'use strict'

import test from 'ava'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

import handleSignup from '../actions/sign-up'
import * as types from './../constants'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

test('sign up', t => {
  t.pass()
})
