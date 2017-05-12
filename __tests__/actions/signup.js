'use strict'

/* eslint-env jest */

import {
  signupRequest,
  signupSuccess,
  signupError
} from './../../actions/signup'
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_ERROR } from './../../constants'

describe('signup action', () => {
  describe('signup request', () => {
    it('should return type SIGNUP_REQUEST', () => {
      expect(signupRequest()).toEqual({ type: SIGNUP_REQUEST })
    })
  })

  describe('signup success', () => {
    it('should return type SIGNUP_SUCCESS and payload', () => {
      const payload = {
        name: 'Ritoplz Team',
        email: 'ritoplzteam@gmail.com',
        password: 'awesome'
      }
      expect(signupSuccess(payload)).toEqual({
        type: SIGNUP_SUCCESS,
        data: payload
      })
    })
  })

  describe('signup error', () => {
    it('should return type SIGNUP_ERROR and payload', () => {
      const payload = { message: 'Wrong password' }
      expect(signupError(payload)).toEqual({
        type: SIGNUP_ERROR,
        error: payload
      })
    })
  })
})
