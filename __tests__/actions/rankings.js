'use strict'

/* eslint-env jest */

import {
  rankingsRequest,
  rankingsSuccess,
  rankingsError
} from './../../actions/fetch-rankings'
import {
  RANKINGS_REQUEST,
  RANKINGS_SUCCESS,
  RANKINGS_ERROR
} from './../../constants'

describe('rankings action', () => {
  describe('rankings request', () => {
    it('should return type RANKINGS_REQUEST', () => {
      expect(rankingsRequest()).toEqual({
        type: RANKINGS_REQUEST
      })
    })
  })

  describe('rankings success', () => {
    it('should return type RANKINGS_SUCCESS and payload', () => {
      const payload = { summoners: [{ name: 'Ritoplz User' }] }
      expect(rankingsSuccess(payload)).toEqual({
        type: RANKINGS_SUCCESS,
        data: payload
      })
    })
  })

  describe('rankings error', () => {
    it('should return type RANKINGS_ERROR and payload', () => {
      const payload = { message: 'An error occurred' }
      expect(rankingsError(payload)).toEqual({
        type: RANKINGS_ERROR,
        error: payload
      })
    })
  })
})
