'use strict'

import React from 'react'
import Link from 'next/link'
import { style } from 'next/css'

const styles = {
  row: {
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto',

    '@media (max-width: 750px)': {
      paddingLeft: '20px',
      paddingRight: '20px'
    }
  },

  header: {
    height: '70px'
  },

  logo: {
    float: 'left',
    fontSize: '2rem',
    fontWeight: '700'
  },

  link: {
    color: '#333',
    textDecoration: 'none',
    lineHeight: '70px',
  },

  nav : {
    lineHeight: '70px',
    float: 'right'
  },

  navItem: {
    display: 'inline-block',
    marginLeft: '30px'
  },

  navLink: {
    color: '#ccc',
    fontSize: '1rem',
    fontWeight: '400',
    transition: '.25s',
    display: 'inline-block',

    ':hover': {
      color: '#333'
    }
  },

  btn: {
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 25px',
    fontSize: '.9rem',
    fontWeight: '500',
    cursor: 'pointer',
    background: 'linear-gradient(to right, #52bdab 0%,#6BB6D6 100%)',
    textDeconration: 'none'
  }
}

export default props => {
  let page
  let linkToHref

  if (props.page === 'signup') {
    page = 'Login'
    linkToHref = '/login'
  } else if (props.page === 'login') {
    page = 'Sign Up'
    linkToHref = '/signup'
  } else if (props.page === 'profile') {
    page = 'Go To Rankings'
    linkToHref = '/rankings'
  } else {
    page = 'Profile'
    linkToHref = '/profile'
  }

  return (
    <header className={style(styles.header)}>
      <div className={style(styles.row)}>
        <Link href="/">
          <h1 className={style(styles.logo)}>
            <span className={style(styles.link)}>Ritoplz</span>
          </h1>
        </Link>

        <ul className={style(styles.nav)}>
          <li className={style(styles.navItem)}>
            <Link href={linkToHref}>
              <button className={style(styles.btn)}>{page}</button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
