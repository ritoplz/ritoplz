'use strict'

import React from 'react'

import { isLogged, logout } from './../services/auth'

export default props => {
  logout()

  if (!isLogged()) {
    props.url.replaceTo('/login')
  }

  return (
    <h1 className="message">
      Bye! :(

      <style jsx>{`
        .message {
          font-weight: 100;
          text-align: center;
          height: calc(100vh - 200px);
          line-height: 70vh;
          color: #333;
        }
      `}</style>
    </h1>
  )
}
