'use strict'

import React from 'react'
import Link from 'next/link'
import { style } from 'next/css'

import Meta from '../components/meta'

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

  btnHeader: {
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 25px',
    fontSize: '.9rem',
    fontWeight: '500',
    cursor: 'pointer',
    background: 'linear-gradient(to right, #52bdab 0%,#6BB6D6 100%)',
    textDeconration: 'none'
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

  cover: {
    textAlign: 'center',
    paddingTop: '100px',
    paddingBottom: '100px'
  },

  title: {
    color: '#333',
    fontSize: '2rem',
    textTransform: 'uppercase'
  },

  subtitle: {
    color: '#333',
    fontSize: '3.5rem',
    fontWeight: '300',
    lineHeight: '4rem',
    marginTop: '10px',
    marginBottom: '15px'
  },

  tagline: {
    color: '#999',
    fontSize: '1.5rem',
    fontWeight: '100',
    marginBottom: '75px'
  },

  btn: {
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '14px 28px',
    fontSize: '1rem',
    height: '55px',
    marginTop: '25px',
    fontWeight: '500',
    cursor: 'pointer',
    background: 'linear-gradient(to right, #52bdab 0%,#6BB6D6 100%)',
    marginLeft: '15px',
    marginRight: '15px'
  }
}

export default () => (
  <div>
    <Meta />

    <header className={style(styles.header)}>
      <div className={style(styles.row)}>
        <Link href="/">
          <h1 className={style(styles.logo)}>
            <span className={style(styles.link)}>Ritoplz</span>
          </h1>
        </Link>

        <ul className={style(styles.nav)}>
          <li className={style(styles.navItem)}>
            <Link href="/login">
              <button className={style(styles.btnHeader)}>Login</button>
            </Link>
          </li>
        </ul>
      </div>
    </header>

    <main className={style(styles.cover)}>
      <h1 className={style(styles.title)}>Ritoplz</h1>
      <h2 className={style(styles.subtitle)}>Do you want to be the best?</h2>
      <h3 className={style(styles.tagline)}>Join the League of Legends rankings and make sure you are on top.</h3>

      <Link href="/signup">
        <span className={style(styles.btn)}>Join Ritoplz</span>
      </Link>

      <Link href="/rankings">
        <span className={style(styles.btn)}>See Rankings</span>
      </Link>
    </main>
  </div>
)
