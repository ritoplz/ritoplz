'use strict'

import axios from 'axios'

function loginRequest (userData) {
  return dispatch => {
    return axios.post('http://localhost:3001/login', userData)
  }
}

export default loginRequest
