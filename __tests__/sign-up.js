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
  const data = {name: 'ritoplz', email: 'hi@ritoplz.com', password: 'monkey'}

  nock('http://localhost:3001/')
    .post('/signup', data)
    .reply(200)

  const expectedActions = [
    {type: types.SIGNUP_REQUEST},
    {type: types.SIGNUP_SUCCESS, body: {data:[]}}
  ]

  const store = mockStore({data: []})

  return store
    .dispatch(handleSignup(data))
    .then(res => {
      console.log(res)
      t.deepEqual(res, expectedActions)
    })
})

test.after('cleanup', t => {
  nock.cleanAll()
})
