'use strict'

import React from 'react'
import { style, insertRule } from 'next/css'
import getTier from 'ritoplz-tier'

const styles = {
  featured: {
    flexBasis: '60%'
  },

  user: {
    textAlign: 'center',
    flexBasis: '60%',
    background: 'url(https://images.unsplash.com/photo-1477346611705-65d1883cee1e?dpr=1&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop=) center center',
    height: 'calc(100vh - 70px)',
    paddingTop: '100px'
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

  avatar: {
    height: '125px',
    width: '125px',
    borderRadius: '20px'
  },

  username: {
    color: '#fff',
    fontSize: '2.5rem',
    fontWeight: '400',
    marginTop: '30px'
  },

  summoner: {
    fontSize: '1.25rem',
    fontWeight: '300',
    marginTop: '5px',
    color: 'rgba(255, 255, 255, .5)'
  },

  userInfo: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '50px'
  },

  userTitle: {
    color: 'rgba(255, 255, 255, .5)',
    fontWeight: '400',
    fontSize: '1rem',
    marginTop: '10px'
  },

  userSubtitle: {
    color: '#fff',
    fontSize: '3rem',
    fontWeight: '300'
  }
}

const Featured = (props) => {
  const tier = props.data.rankedSolo.tier
  const flag = getTier(tier).flag.small

  return (
    <div className={style(styles.featured)}>
      <div className={style(styles.user)}>
        <figure className={style(styles.image)}>
          <span className={style(styles.flag)}>
            <img src={flag} alt=""/>
          </span>

          <img className={style(styles.avatar)} src="https://s3.amazonaws.com/uifaces/faces/twitter/peterme/128.jpg" alt="" />
        </figure>

        <h2 className={style(styles.username)}>{props.data.username}</h2>
        <h3 className={style(styles.summoner)}>{props.data.name}</h3>

        <ul className={style(styles.userInfo)}>
          <li className={style(styles.userInfoItem)}>
            <span className={style(styles.userSubtitle)}>{props.position}</span>
            <h3 className={style(styles.userTitle)}>Ranking</h3>
          </li>

          <li className={style(styles.userInfoItem)}>
            <span className={style(styles.userSubtitle)}>{props.data.rankedSolo.wins}/{props.data.rankedSolo.losses}</span>
            <h3 className={style(styles.userTitle)}>Win/Loss</h3>
          </li>

          <li className={style(styles.userInfoItem)}>
            <span className={style(styles.userSubtitle)}>{props.data.rankedSolo.elo}</span>
            <h3 className={style(styles.userTitle)}>Elo</h3>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Featured
