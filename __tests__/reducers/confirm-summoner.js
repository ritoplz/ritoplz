'use strict'

/* eslint-env jest */

import reducer from './../../reducers/confirm-summoner'
import {
  CONFIRM_SUMMONER_REQUEST,
  CONFIRM_SUMMONER_SUCCESS,
  CONFIRM_SUMMONER_ERROR
} from './../../constants'

describe('confirmSummoner reducer', () => {
  describe('confirmSummoner request', () => {
    it('should return requesting equal true', () => {
      const { requesting } = reducer(undefined, {
        type: CONFIRM_SUMMONER_REQUEST
      })
      expect(requesting).toBeTruthy()
    })
  })

  describe('confirmSummoner success', () => {
    const confirmSummoner = { token: 1 }
    const { requesting, requested, data } = reducer(undefined, {
      type: CONFIRM_SUMMONER_SUCCESS,
      data: confirmSummoner
    })

    it('should return requesting equal false', () => {
      expect(requesting).toBeFalsy()
    })

    it('should return requested equal true', () => {
      expect(requested).toBeTruthy()
    })

    it('should return data', () => {
      expect(data).toEqual(confirmSummoner)
    })
  })

  describe('confirmSummoner error', () => {
    const confirmSummoner = { message: `Couldn't find confirmSummoner` }
    const { requesting, requested, error } = reducer(undefined, {
      type: CONFIRM_SUMMONER_ERROR,
      error: confirmSummoner
    })

    it('should return requesting equal false', () => {
      expect(requesting).toBeFalsy()
    })

    it('should return requested equal true', () => {
      expect(requested).toBeTruthy()
    })

    it('should return error', () => {
      expect(error).toEqual(confirmSummoner)
    })
  })
})
