import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from '../../constants'
import reducer from '../../reducers/login'

describe('login reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      requesting: false,
      requested: false,
      data: {},
      error: null
    })
  })

  it('should handle LOGIN_REQUEST', () => {
    expect(
      reducer([], {
        type: LOGIN_REQUEST
      })
    ).toEqual({
      requesting: true
    })
  })

  it('should handle LOGIN_SUCCESS', () => {
    expect(
      reducer([], {
        type: LOGIN_SUCCESS,
        data: {
          token: 'token1234',
          userId: 'userid1234'
        }
      })
    ).toEqual({
      requesting: false,
      requested: true,
      data: {
        token: 'token1234',
        userId: 'userid1234'
      }
    })
  })

  it('should handle LOGIN_ERROR', () => {
    expect(
      reducer([], {
        type: LOGIN_ERROR,
        data: {
          message: 'Email cannont be blank'
        }
      })
    ).toEqual({
      requesting: false,
      error: {
        message: 'Email cannont be blank'
      }
    })
  })
})
