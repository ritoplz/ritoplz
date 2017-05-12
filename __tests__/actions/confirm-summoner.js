'use strict'

/* eslint-env jest */

import {
  confirmSummonerRequest,
  confirmSummonerSuccess,
  confirmSummonerError
} from './../../actions/confirm-summoner'
import {
  CONFIRM_SUMMONER_REQUEST,
  CONFIRM_SUMMONER_SUCCESS,
  CONFIRM_SUMMONER_ERROR
} from './../../constants'

describe('confirmSummoner action', () => {
  describe('confirmSummoner request', () => {
    it('should return type CONFIRM_SUMMONER_REQUEST', () => {
      expect(confirmSummonerRequest()).toEqual({
        type: CONFIRM_SUMMONER_REQUEST
      })
    })
  })

  describe('confirmSummoner success', () => {
    it('should return type CONFIRM_SUMMONER_SUCCESS and payload', () => {
      const payload = { name: 'Ritoplz Summoner' }
      expect(confirmSummonerSuccess(payload)).toEqual({
        type: CONFIRM_SUMMONER_SUCCESS,
        data: payload
      })
    })
  })

  describe('confirmSummoner error', () => {
    it('should return type CONFIRM_SUMMONER_ERROR and payload', () => {
      const payload = { message: 'An error occurred' }
      expect(confirmSummonerError(payload)).toEqual({
        type: CONFIRM_SUMMONER_ERROR,
        error: payload
      })
    })
  })
})
