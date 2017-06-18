'use strict'

/* eslint-env jest */

import reducer from './../../reducers/add-summoner'
import {
  ADD_SUMMONER_REQUEST,
  ADD_SUMMONER_SUCCESS,
  ADD_SUMMONER_ERROR
} from './../../constants'

describe('addSummoner reducer', () => {
  describe('addSummoner request', () => {
    it('should return requesting equal true', () => {
      const { requesting } = reducer(undefined, { type: ADD_SUMMONER_REQUEST })
      expect(requesting).toBeTruthy()
    })
  })

  describe('addSummoner success', () => {
    const addSummoner = { token: 1 }
    const { requesting, requested, data } = reducer(undefined, {
      type: ADD_SUMMONER_SUCCESS,
      data: addSummoner
    })

    it('should return requesting equal false', () => {
      expect(requesting).toBeFalsy()
    })

    it('should return requested equal true', () => {
      expect(requested).toBeTruthy()
    })

    it('should return data', () => {
      expect(data).toEqual(addSummoner)
    })
  })

  describe('addSummoner error', () => {
    const addSummoner = { message: `Couldn't find addSummoner` }
    const { requesting, requested, error } = reducer(undefined, {
      type: ADD_SUMMONER_ERROR,
      error: addSummoner
    })

    it('should return requesting equal false', () => {
      expect(requesting).toBeFalsy()
    })

    it('should return requested equal true', () => {
      expect(requested).toBeTruthy()
    })

    it('should return error', () => {
      expect(error).toEqual(addSummoner)
    })
  })
})
