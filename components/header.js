'use strict'

import React from 'react'
import Link from 'next/link'
import { style } from 'next/css'

const styles = {
  header: {
    height: '70px',
    backgroundColor: '#fff',
    boxShadow: '0 0 20px rgba(0, 0, 0, .08)'
  },

  logo: {
    fontSize: '2rem',
    lineHeight: '70px',
    color: '#333',
    marginLeft: '50px'
  }
}

export default () => {
  return (
    <header className={style(styles.header)}>
      <h1 className={style(styles.logo)}>Ritoplz</h1>
    </header>
  )
}
