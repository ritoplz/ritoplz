'use strict'

import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

import handleSignup from '../../actions/signup'
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from '../../constants'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('signup action', () => {
  afterEach(() => {
    nock.clearAll()
  })

  it('should dispatch SIGNUP_SUCCESS when requesting signup', () => {
    nock('http://localhost:3001/')
      .post('/signup')
      .reply(200, { body: { todos: {} }})

    const expectedActions = [
      { type: SIGNUP_REQUEST },
      { type: SIGNUP_SUCCESS, body: { todos: {} }}
    ]

    const initialState = {}

    const store = mockStore(initialState)
    console.log(store.getActions())
  })
})
