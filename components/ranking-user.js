'use strict'

import React from 'react'
import { style } from 'next/css'
import getTier from 'ritoplz-tier'
import { Line } from 'rc-progress'

const styles = {
  rankingItem: {
    display: 'flex',
    height: '85px',
    marginBottom: '20px',
    border: '1px solid #F3F5FB',
    borderRadius: '10px',
    boxShadow: '0 10px 50px rgba(0, 0, 0, .025)',
    paddingLeft: '25px',
    paddingRight: '25px'
  },

  position: {
    lineHeight: '85px',
    flexBasis: '5%',
    color: '#333'
  },

  image: {
    flexBasis: '10%',
    marginTop: '18px'
  },

  avatar: {
    height: '50px',
    width: '50px',
    borderRadius: '5px'
  },

  rankingInfo: {
    marginTop: '20px',
    flexBasis: '30%'
  },

  username: {
    fontSize: '1.25rem',
    fontWeight: '400',
    color: '#333'
  },

  summoner: {
    fontSize: '1rem',
    fontWeight: '600',
    color: 'rgba(0, 0, 0, .5)'
  },

  flag: {
    flexBasis: '20%',
    textAlign: 'right'
  },

  flagImage: {
    width: '70px',
    height: '65px',
    marginTop: '10px'
  },

  tierInfo: {
    flexBasis: '40%',
    textAlign: 'left'
  },

  tier: {
    color: '#333',
    marginTop: '26px',
    marginBottom: '-22px',
    fontWeight: '600',
    fontSize: '.9rem'
  },

  lp: {
    color: '#333',
    float: 'right',
    marginBottom: '5px',
    fontSize: '14px',
    fontWeight: '600'
  }
}

export default (props) => {
  const { data: { username, name, rankedSolo, profileIconId } } = props
  const tier = rankedSolo.tier
  const flag = getTier(tier).flag.small

  return (
    <li className={style(styles.rankingItem)}>
      <h4 className={style(styles.position)}>{props.position}.</h4>

      <figure className={style(styles.image)}>
        <img className={style(styles.avatar)} src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/profileicon/${profileIconId}.png`} alt="" />
      </figure>

      <div className={style(styles.rankingInfo)}>
        <h2 className={style(styles.username)}>{username}</h2>
        <h3 className={style(styles.summoner)}>{name}</h3>
      </div>

      <div className={style(styles.tierInfo)}>
        <h4 className={style(styles.tier)}>{rankedSolo.tier} {rankedSolo.division}</h4>
        <span className={style(styles.lp)}>LP {rankedSolo.lp} / 100</span>
        <Line percent={rankedSolo.lp} strokeWidth="1.5" strokeColor="#52bdab" trailWidth="1.5" trailColor="#eee" />
      </div>

      <span className={style(styles.flag)}>
        <img className={style(styles.flagImage)} src={flag} alt="" />
      </span>
    </li>
  )
}
