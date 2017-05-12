'use strict'

/* eslint-env jest */

import { loginRequest, loginSuccess, loginError } from './../../actions/login'
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from './../../constants'

describe('login action', () => {
  describe('login request', () => {
    it('should return type LOGIN_REQUEST', () => {
      expect(loginRequest()).toEqual({ type: LOGIN_REQUEST })
    })
  })

  describe('login success', () => {
    it('should return type LOGIN_SUCCESS and payload', () => {
      const payload = { email: 'ritoplzteam@gmail.com', password: 'awesome' }
      expect(loginSuccess(payload)).toEqual({
        type: LOGIN_SUCCESS,
        data: payload
      })
    })
  })

  describe('login error', () => {
    it('should return type LOGIN_ERROR and payload', () => {
      const payload = { message: 'Wrong password' }
      expect(loginError(payload)).toEqual({ type: LOGIN_ERROR, error: payload })
    })
  })
})
