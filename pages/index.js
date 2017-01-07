'use strict'

import React from 'react'
import Link from 'next/link'
import { style } from 'next/css'

import Meta from '../components/meta'
import Footer from '../components/footer'
import TopPlayers from '../containers/top-players'

const styles = {
  row: {
    maxWidth: '1000px',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',

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
    background: 'url("static/bg.png") center center',
    backgroundSize: 'cover',
    height: '100vh',
    paddingTop: '110px',
    paddingBottom: '75px'
  },

  title: {
    color: '#333',
    fontSize: '4rem',
    textTransform: 'uppercase',
    maxWidth: '500px'
  },

  subtitle: {
    color: '#999',
    fontSize: '1.5rem',
    lineHeight: '2.5rem',
    marginTop: '10px',
    fontWeight: '400',
    marginBottom: '15px',
    marginBottom: '70px'
  },

  btn: {
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '14px 28px',
    fontSize: '1rem',
    height: '55px',
    fontWeight: '500',
    cursor: 'pointer',
    background: 'linear-gradient(to right, #52bdab 0%,#6BB6D6 100%)',
    marginRight: '15px'
  },

  btnLink: {
    color: '#52bdab',
    background: 'transparent',
    textAlign: 'center',
    padding: '14px 28px',
    height: '55px',
    fontSize: '1rem',
    border: 'none',
    fontWeight: '500',
    cursor: 'pointer'
  },

  card: {
    position: 'absolute',
    top: '20px',
    right: '-100px',

    '@media (max-width: 750px)': {
      display: 'none'
    }
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
      <div className={style(styles.row)}>
        <h1 className={style(styles.title)}>Make sure you are on top</h1>
        <h2 className={style(styles.subtitle)}>The first worldwide League of Legends Rankings. <br/>See who’s the best player of your region.</h2>

        <Link href="/signup">
          <span className={style(styles.btn)}>Join Ritoplz</span>
        </Link>

        <Link href="/rankings">
          <span className={style(styles.btnLink)}>See Rankings</span>
        </Link>

        <img className={style(styles.card)} src="static/card.png" alt=""/>
      </div>
    </main>

    <TopPlayers />

    <Footer />
  </div>
)
