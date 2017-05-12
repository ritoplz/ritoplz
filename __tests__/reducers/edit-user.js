'use strict'

/* eslint-env jest */

import reducer from './../../reducers/edit-user'
import {
  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  EDIT_USER_ERROR
} from './../../constants'

describe('editUser reducer', () => {
  describe('editUser request', () => {
    it('should return requesting equal true', () => {
      const { requesting } = reducer(undefined, {
        type: EDIT_USER_REQUEST
      })
      expect(requesting).toBeTruthy()
    })
  })

  describe('editUser success', () => {
    const editUser = { token: 1 }
    const { requesting, requested, data } = reducer(undefined, {
      type: EDIT_USER_SUCCESS,
      data: editUser
    })

    it('should return requesting equal false', () => {
      expect(requesting).toBeFalsy()
    })

    it('should return requested equal true', () => {
      expect(requested).toBeTruthy()
    })

    it('should return data', () => {
      expect(data).toEqual(editUser)
    })
  })

  describe('editUser error', () => {
    const editUser = { message: `Couldn't find editUser` }
    const { requesting, requested, error } = reducer(undefined, {
      type: EDIT_USER_ERROR,
      error: editUser
    })

    it('should return requesting equal false', () => {
      expect(requesting).toBeFalsy()
    })

    it('should return requested equal true', () => {
      expect(requested).toBeTruthy()
    })

    it('should return error', () => {
      expect(error).toEqual(editUser)
    })
  })
})
