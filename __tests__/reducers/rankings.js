'use strict'

/* eslint-env jest */

import reducer from './../../reducers/rankings'
import {
  RANKINGS_REQUEST,
  RANKINGS_SUCCESS,
  RANKINGS_ERROR
} from './../../constants'

describe('rankings reducer', () => {
  describe('rankings request', () => {
    it('should return requesting equal true', () => {
      const { requesting } = reducer(undefined, {
        type: RANKINGS_REQUEST
      })
      expect(requesting).toBeTruthy()
    })
  })

  describe('rankings success', () => {
    const rankings = { token: 1 }
    const { requesting, requested, data } = reducer(undefined, {
      type: RANKINGS_SUCCESS,
      data: rankings
    })

    it('should return requesting equal false', () => {
      expect(requesting).toBeFalsy()
    })

    it('should return requested equal true', () => {
      expect(requested).toBeTruthy()
    })

    it('should return data', () => {
      expect(data).toEqual(rankings)
    })
  })

  describe('rankings error', () => {
    const rankings = { message: `Couldn't find rankings` }
    const { requesting, requested, error } = reducer(undefined, {
      type: RANKINGS_ERROR,
      error: rankings
    })

    it('should return requesting equal false', () => {
      expect(requesting).toBeFalsy()
    })

    it('should return requested equal true', () => {
      expect(requested).toBeTruthy()
    })

    it('should return error', () => {
      expect(error).toEqual(rankings)
    })
  })
})
