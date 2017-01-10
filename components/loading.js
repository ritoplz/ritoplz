'use strict'

import React from 'react'
import { style } from 'next/css'

const styles = {
  loading: {
    fontWeight: '100',
    textAlign: 'center',
    height: 'calc(100vh - 200px)',
    lineHeight: '70vh',
    color: '#333'
  }
}

export default () => (
  <h1 className={style(styles.loading)}>Loading...</h1>
)
