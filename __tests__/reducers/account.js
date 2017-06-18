'use strict'

/* eslint-env jest */

import reducer from './../../reducers/account'
import {
  ACCOUNT_REQUEST,
  ACCOUNT_SUCCESS,
  ACCOUNT_ERROR
} from './../../constants'

describe('account reducer', () => {
  describe('account request', () => {
    it('should return requesting equal true', () => {
      const { requesting } = reducer(undefined, { type: ACCOUNT_REQUEST })
      expect(requesting).toBeTruthy()
    })
  })

  describe('account success', () => {
    const account = { token: 1 }
    const { requesting, requested, data } = reducer(undefined, {
      type: ACCOUNT_SUCCESS,
      data: account
    })

    it('should return requesting equal false', () => {
      expect(requesting).toBeFalsy()
    })

    it('should return requested equal true', () => {
      expect(requested).toBeTruthy()
    })

    it('should return data', () => {
      expect(data).toEqual(account)
    })
  })

  describe('account error', () => {
    const account = { message: `Couldn't find account` }
    const { requesting, requested, error } = reducer(undefined, {
      type: ACCOUNT_ERROR,
      error: account
    })

    it('should return requesting equal false', () => {
      expect(requesting).toBeFalsy()
    })

    it('should return requested equal true', () => {
      expect(requested).toBeTruthy()
    })

    it('should return error', () => {
      expect(error).toEqual(account)
    })
  })
})
