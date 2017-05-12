'use strict'

/* eslint-env jest */

import {
  addSummonerRequest,
  addSummonerSuccess,
  addSummonerError
} from './../../actions/add-summoner'
import {
  ADD_SUMMONER_REQUEST,
  ADD_SUMMONER_SUCCESS,
  ADD_SUMMONER_ERROR
} from './../../constants'

describe('addSummoner action', () => {
  describe('addSummoner request', () => {
    it('should return type ADD_SUMMONER_REQUEST', () => {
      expect(addSummonerRequest()).toEqual({ type: ADD_SUMMONER_REQUEST })
    })
  })

  describe('addSummoner success', () => {
    it('should return type ADD_SUMMONER_SUCCESS and payload', () => {
      const payload = { name: 'Ritoplz Summoner' }
      expect(addSummonerSuccess(payload)).toEqual({
        type: ADD_SUMMONER_SUCCESS,
        data: payload
      })
    })
  })

  describe('addSummoner error', () => {
    it('should return type ADD_SUMMONER_ERROR and payload', () => {
      const payload = { message: 'An error occurred' }
      expect(addSummonerError(payload)).toEqual({
        type: ADD_SUMMONER_ERROR,
        error: payload
      })
    })
  })
})
