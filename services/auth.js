'use strict'

import cookie from 'react-cookies'

export const getToken = () => {
  return cookie.load('ritoplzToken')
}

export const setToken = token => {
  const now = new Date()
  now.setDate(now.getDate() + 14)

  return cookie.save('ritoplzToken', token, {
    expires: now,
    path: '/'
  })
}

export const logout = () => {
  return cookie.remove('ritoplzToken', { path: '/' })
}

export const isLogged = () => {
  const token = getToken()

  return !!token
}
