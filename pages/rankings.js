'use strict'

import React from 'react'

import Header from './../components/header'
import { style, insertRule } from 'next/css'
import getTier from 'ritoplz-tier'

const styles = {
  rankings: {
    display: 'flex'
  },

  user: {
    textAlign: 'center',
    flexBasis: '40%',
    background: 'url(https://images.unsplash.com/photo-1477346611705-65d1883cee1e?dpr=1&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop=) center center',
    height: 'calc(100vh - 70px)',
    paddingTop: '100px'
  },

  avatar: {
    height: '125px',
    width: '125px',
    borderRadius: '20px'
  },

  username: {
    color: '#fff',
    fontSize: '2.5rem',
    fontWeight: '500',
    marginTop: '30px'
  },

  summoner: {
    color: '#fff',
    fontSize: '1.25rem',
    fontWeight: 400
  },

  image: {
    position: 'relative',
    display: 'inline-block'
  },

  flag: {
    position: 'absolute',
    top: '-60px',
    right: '-50px'
  },

  userInfo: {
    display: 'inline-block',
    margin: '75px'
  },

  userTitle: {
    color: '#fff',
    fontWeight: '400',
    marginBottom: '10px'
  },

  userSubtitle: {
    color: '#fff'
  }
}

export default () => {
  const flag = getTier('bronze').flag.small

  return (
    <div>
      <Header />

      <section>
        <ul className={style(styles.rankings)}>
          <li className={style(styles.user)}>
            <figure className={style(styles.image)}>
              <span className={style(styles.flag)}>
                <img src={flag} alt=""/>
              </span>

              <img className={style(styles.avatar)} src="https://s3.amazonaws.com/uifaces/faces/twitter/peterme/128.jpg" alt="" />
            </figure>

            <h2 className={style(styles.username)}>Sue Dixon</h2>
            <h3 className={style(styles.summoner)}>nicoleaniston</h3>

            <ul>
              <li className={style(styles.userInfo)}>
                <h3 className={style(styles.userTitle)}>Win/Loss</h3>
                <span className={style(styles.userSubtitle)}>8/15</span>
              </li>

              <li className={style(styles.userInfo)}>
                <h3 className={style(styles.userTitle)}>Elo</h3>
                <span className={style(styles.userSubtitle)}>580</span>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  )
}

insertRule('* {padding: 0; margin: 0; box-sizing: border-box; font-family: Source Sans Pro, Helvetica Neue, Helvetica }')
