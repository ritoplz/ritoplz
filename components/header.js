'use strict'

import React from 'react'
import Link from 'next/link'
import { style } from 'next/css'

const styles = {
  row: {
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  header: {
    height: '70px'
  },

  logo: {
    float: 'left',
    fontSize: '2.5rem',
    fontWeight: '700'
  },

  link: {
    color: '#333',
    textDecoration: 'none',
    lineHeight: '70px',
  },

  profileLink: {
    color: '#ccc',
    float: 'right',
    fontSize: '1.15rem',
    fontWeight: '400',
    transition: '.25s',

    ':hover': {
      color: '#333'
    }
  }
}

export default () => {
  return (
    <header className={style(styles.header)}>
      <div className={style(styles.row)}>
        <Link href="/">
          <h1 className={style(styles.logo)}>
            <a className={style(styles.link)}>Ritoplz</a>
          </h1>
        </Link>

        <Link href="/profile">
          <a className={style(styles.link)}>
            <span className={style(styles.profileLink)}>Profile</span>
          </a>
        </Link>
      </div>
    </header>
  )
}
