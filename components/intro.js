'use strict'

import React from 'react'
import { style } from 'next/css'

export default props => (
  <header className={style(styles.base)}>
    <h1 className={style(styles.title)}>Hello, <span className={style(styles.username)}>{props.user}</span>!</h1>
    <h3 className={style(styles.location)} onClick={props.openModalLocation}>{props.location}</h3>

    <hr className={style(styles.divider)}/>
  </header>
)

const styles = {
  base: {
    paddingTop: '50px',
    paddingBottom: '30px'
  },

  title: {
    fontSize: '70px',
    fontWeight: '400',
    lineHeight: '70px',
    marginBottom: '20px',
    marginTop: 0,
    color: '#333'
  },

  username: {
    fontWeight: 600
  },

  location: {
    color: '#ccc',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '30px',
    marginTop: 0,
    marginBottom: 0,
    cursor: 'pointer',
    transition: '.25s',

    ':hover': {
      color: '#999'
    }
  },

  divider: {
    width: '50px',
    border: '1px solid #F3F5FB',
    marginTop: '30px',
    marginLeft: 0
  }
}
