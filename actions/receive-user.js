'use strict'

function receiveUser(user) {
  return {
    type: 'RECEIVE_USER',
    user
  }
}

export default receiveUser
