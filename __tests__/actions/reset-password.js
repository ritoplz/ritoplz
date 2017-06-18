'use strict'

/* eslint-env jest */

import {
  resetPasswordRequest,
  resetPasswordSuccess,
  resetPasswordError
} from './../../actions/reset-password'
import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR
} from './../../constants'

describe('resetPassword action', () => {
  describe('resetPassword request', () => {
    it('should return type RESET_PASSWORD_REQUEST', () => {
      expect(resetPasswordRequest()).toEqual({
        type: RESET_PASSWORD_REQUEST
      })
    })
  })

  describe('resetPassword success', () => {
    it('should return type RESET_PASSWORD_SUCCESS and payload', () => {
      const payload = { email: 'ritoplzteam@gmail.com' }
      expect(resetPasswordSuccess(payload)).toEqual({
        type: RESET_PASSWORD_SUCCESS,
        data: payload
      })
    })
  })

  describe('resetPassword error', () => {
    it('should return type RESET_PASSWORD_ERROR and payload', () => {
      const payload = { message: 'An error occurred' }
      expect(resetPasswordError(payload)).toEqual({
        type: RESET_PASSWORD_ERROR,
        error: payload
      })
    })
  })
})
