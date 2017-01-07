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

export default () => {
  const items = [
    {name: 'Rankings', link: 'rankings', type: 'item'},
    {name: 'FAQ', link: 'faq', type: 'item'},
    {name: 'Login', link: 'login', type: 'button'}
  ]
  return (
    <div>
      <Meta />

      <Header items={items} />

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
}