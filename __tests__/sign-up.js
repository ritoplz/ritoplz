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
  const data = {name: 'Ritoplz', email: 'hi@ritoplz.com', password: 'monkey'}
  const expectedData = {
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJyaXRvcGx6LmNvbSIsInN1YiI6IjU4MmZjZGZmOTM3ZTIyOGU1ZWFkNmI3YSIsImlhdCI6MTQ3OTUyNzkzNSwiZXhwIjoxNDgwMTMyNzM1fQ.QKkMNr6j0TMS-qXMthcCIHC-jX5lvg9weijIa1kCwuA',
    user: {
      updatedAt: '2016-11-19T03:58:55.267Z',
      createdAt: '2016-11-19T03:58:55.267Z',
      name: 'Ritoplz',
      email: 'hi@ritoplz.com',
      _id: '582fcdff937e228e5ead6b7a',
      emailConfirmed: false
    }
  }

  nock('http://localhost:3001')
    .post('/signup', data)
    .reply(200, expectedData)

  const expectedActions = {type: 'SIGNUP_SUCCESS', data: expectedData}
  const store = mockStore()

  return store
    .dispatch(handleSignup(data))
    .then(res => {
      t.deepEqual(res, expectedActions)
    })
})

test.after('cleanup', t => {
  nock.cleanAll()
})
