'use strict'

import cookie from 'react-cookies'

export const getToken = () => {
  return cookie.load('ritoplzToken')
}

export const setToken = token => {
  return cookie.save('ritoplzToken', token, { path: '/' })
}

export const logout = () => {
  return cookie.remove('ritoplzToken', { path: '/' })
}

export const isLogged = () => {
  const token = getToken()

  return !!token
}
