'use strict'

import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    Accept: 'application/json'
  }
})

api.interceptors.request.use(config => {
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
