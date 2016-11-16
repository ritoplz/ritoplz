'use strict'

import axios from 'axios'

function signUpRequest (userData) {
  return dispatch => {
    return axios.post('http://localhost:3001/signup', userData)
  }
}

export default signUpRequest
