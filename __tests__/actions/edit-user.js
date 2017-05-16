'use strict'

/* eslint-env jest */

import {
  editUserRequest,
  editUserSuccess,
  editUserError
} from './../../actions/edit-user'
import {
  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  EDIT_USER_ERROR
} from './../../constants'

describe('editUser action', () => {
  describe('editUser request', () => {
    it('should return type EDIT_USER_REQUEST', () => {
      expect(editUserRequest()).toEqual({
        type: EDIT_USER_REQUEST
      })
    })
  })

  describe('editUser success', () => {
    it('should return type EDIT_USER_SUCCESS and payload', () => {
      const payload = { name: 'Ritoplz User' }
      expect(editUserSuccess(payload)).toEqual({
        type: EDIT_USER_SUCCESS,
        data: payload
      })
    })
  })

  describe('editUser error', () => {
    it('should return type EDIT_USER_ERROR and payload', () => {
      const payload = { message: 'An error occurred' }
      expect(editUserError(payload)).toEqual({
        type: EDIT_USER_ERROR,
        error: payload
      })
    })
  })
})
