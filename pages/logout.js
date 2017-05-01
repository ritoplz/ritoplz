'use strict'

import React from 'react'

import { isLogged, logout } from './../services/auth'

export default props => {
  logout()

  if (!isLogged()) {
    props.url.replaceTo('/login')
  }

  return (
    <h1 className={style(styles.message)}>
      Bye! :(

      <style jsx>{`
        .message {
          fontWeight: 100;
          textAlign: center;
          height: calc(100vh - 200px);
          lineHeight: 70vh;
          color: #333;
        }
      `}</style>
    </h1>
  )
}
