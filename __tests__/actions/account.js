'use strict'

/* eslint-env jest */

import {
  accountRequest,
  accountSuccess,
  accountError
} from './../../actions/fetch-account'
import {
  ACCOUNT_REQUEST,
  ACCOUNT_SUCCESS,
  ACCOUNT_ERROR
} from './../../constants'

describe('account action', () => {
  describe('account request', () => {
    it('should return type ACCOUNT_REQUEST', () => {
      expect(accountRequest()).toEqual({ type: ACCOUNT_REQUEST })
    })
  })

  describe('account success', () => {
    it('should return type ACCOUNT_SUCCESS and payload', () => {
      const payload = { email: 'ritoplzteam@gmail.com', name: 'Ritoplz Team' }
      expect(accountSuccess(payload)).toEqual({
        type: ACCOUNT_SUCCESS,
        data: payload
      })
    })
  })

  describe('account error', () => {
    it('should return type ACCOUNT_ERROR and payload', () => {
      const payload = { message: 'An error occurred' }
      expect(accountError(payload)).toEqual({
        type: ACCOUNT_ERROR,
        error: payload
      })
    })
  })
})
