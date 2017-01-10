'use strict'

import test from 'ava'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

import handleLogin from '../actions/login'
import * as types from './../constants'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

test('login', t => {
  t.pass()
})
