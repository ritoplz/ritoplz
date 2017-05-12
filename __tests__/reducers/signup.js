'use strict'

/* eslint-env jest */

import reducer from './../../reducers/signup'
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_ERROR } from './../../constants'

describe('signup reducer', () => {
  describe('signup request', () => {
    it('should return requesting equal true', () => {
      const { requesting } = reducer(undefined, { type: SIGNUP_REQUEST })
      expect(requesting).toBeTruthy()
    })
  })

  describe('signup success', () => {
    const signup = { token: 1 }
    const { requesting, requested, data } = reducer(undefined, {
      type: SIGNUP_SUCCESS,
      data: signup
    })

    it('should return requesting equal false', () => {
      expect(requesting).toBeFalsy()
    })

    it('should return requested equal true', () => {
      expect(requested).toBeTruthy()
    })

    it('should return data', () => {
      expect(data).toEqual(signup)
    })
  })

  describe('signup error', () => {
    const signup = { message: 'Email should not be blank' }
    const { requesting, requested, error } = reducer(undefined, {
      type: SIGNUP_ERROR,
      error: signup
    })

    it('should return requesting equal false', () => {
      expect(requesting).toBeFalsy()
    })

    it('should return requested equal true', () => {
      expect(requested).toBeTruthy()
    })

    it('should return error', () => {
      expect(error).toEqual(signup)
    })
  })
})
