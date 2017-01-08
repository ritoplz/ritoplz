'use strict'

import React from 'react'
import { style } from 'next/css'

import { isLogged, logout } from './../services/auth'

const styles = {
  message: {
    fontWeight: '100',
    textAlign: 'center',
    height: 'calc(100vh - 200px)',
    lineHeight: '70vh',
    color: '#333'
  }
}

export default (props) => {
  logout()

  if (!isLogged()) {
    props.url.replaceTo('/login')
  }

  return (
    <h1 className={style(styles.message)}>Bye! :(h1>
  )
}
