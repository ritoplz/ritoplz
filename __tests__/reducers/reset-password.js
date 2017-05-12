'use strict'

/* eslint-env jest */

import reducer from './../../reducers/reset-password'
import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR
} from './../../constants'

describe('resetPassword reducer', () => {
  describe('resetPassword request', () => {
    it('should return requesting equal true', () => {
      const { requesting } = reducer(undefined, {
        type: RESET_PASSWORD_REQUEST
      })
      expect(requesting).toBeTruthy()
    })
  })

  describe('resetPassword success', () => {
    const resetPassword = { token: 1 }
    const { requesting, requested, data } = reducer(undefined, {
      type: RESET_PASSWORD_SUCCESS,
      data: resetPassword
    })

    it('should return requesting equal false', () => {
      expect(requesting).toBeFalsy()
    })

    it('should return requested equal true', () => {
      expect(requested).toBeTruthy()
    })

    it('should return data', () => {
      expect(data).toEqual(resetPassword)
    })
  })

  describe('resetPassword error', () => {
    const resetPassword = { message: `Couldn't find resetPassword` }
    const { requesting, requested, error } = reducer(undefined, {
      type: RESET_PASSWORD_ERROR,
      error: resetPassword
    })

    it('should return requesting equal false', () => {
      expect(requesting).toBeFalsy()
    })

    it('should return requested equal true', () => {
      expect(requested).toBeTruthy()
    })

    it('should return error', () => {
      expect(error).toEqual(resetPassword)
    })
  })
})
