'use strict'

import React from 'react'
import Link from 'next/link'
import { style } from 'next/css'

const styles = {
  header: {
    height: '70px',
    backgroundColor: '#fff',
    boxShadow: '0 0 20px rgba(0, 0, 0, .08)'
  }
}

export default () => {
  return (
    <header className={style(styles.header)}>
      <Link href="/">Ritoplz</Link>
    </header>
  )
}
