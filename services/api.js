'use strict'

/* global API_URL */

import axios from 'axios'
import { getToken, isLogged } from './auth'

const apiUrl = API_URL || 'http://localhost:3001'

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    Accept: 'application/json'
  }
})

api.interceptors.request.use(config => {
  const token = getToken()

  if (isLogged()) {
    config.headers.authorization = token
  }

  return config
})

api.interceptors.response.use(
  response => {
    if (response.data) {
      return response.data
    }

    return response
  },
  error => {
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data.error)
    }

    return Promise.reject(error)
  }
)

export default api
