'use strict'

import axios from 'axios'

import receiveUser from './receive-user'

function fetchUser () {
  return dispatch => {
    return axios.get('http://localhost:3001/account', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
      }
    }).then(res => {
      type: 'RECEIVE_USER',
      res
    })
  }
}

export default fetchUser

