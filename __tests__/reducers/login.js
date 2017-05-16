'use strict'

/* eslint-env jest */

import reducer from './../../reducers/login'
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from './../../constants'

describe('login reducer', () => {
  describe('login request', () => {
    it('should return requesting equal true', () => {
      const { requesting } = reducer(undefined, {
        type: LOGIN_REQUEST
      })
      expect(requesting).toBeTruthy()
    })
  })

  describe('login success', () => {
    const login = { token: 1 }
    const { requesting, requested, data } = reducer(undefined, {
      type: LOGIN_SUCCESS,
      data: login
    })

    it('should return requesting equal false', () => {
      expect(requesting).toBeFalsy()
    })

    it('should return requested equal true', () => {
      expect(requested).toBeTruthy()
    })

    it('should return data', () => {
      expect(data).toEqual(login)
    })
  })

  describe('login error', () => {
    const login = { message: `Couldn't find login` }
    const { requesting, requested, error } = reducer(undefined, {
      type: LOGIN_ERROR,
      error: login
    })

    it('should return requesting equal false', () => {
      expect(requesting).toBeFalsy()
    })

    it('should return requested equal true', () => {
      expect(requested).toBeTruthy()
    })

    it('should return error', () => {
      expect(error).toEqual(login)
    })
  })
})
