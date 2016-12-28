'use strict'

import React from 'react'
import { style, insertRule } from 'next/css'
import getTier from 'ritoplz-tier'
import ordinal from 'ordinal-numbers'
import { Line } from 'rc-progress'

const styles = {
  featured: {
    marginTop: '50px',
    marginBottom: '50px'
  },

  user: {
    textAlign: 'center',
    background: 'url(https://images.unsplash.com/photo-1477346611705-65d1883cee1e?dpr=1&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop=) center center',
    borderRadius: '10px',
    textAlign: 'center',
    padding: '50px 175px',
    minWidth: '700px'
  },

  avatar: {
    width: '100px',
    borderRadius: '50%'
  },

  username: {
    color: '#fff',
    fontSize: '2.5rem',
    fontWeight: '400',
  },

  summoner: {
    fontSize: '1.25rem',
    fontWeight: '300',
    marginTop: '5px',
    color: 'rgba(255, 255, 255, .5)'
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
  },

  tierInfo: {
    textAlign: 'left'
  },

  tier: {
    color: '#fff',
    marginTop: '30px',
    marginBottom: '-20px',
    fontWeight: '500'
  },

  lp: {
    color: '#fff',
    float: 'right',
    marginBottom: '5px'
  }
}

const Featured = (props) => {
  const tier = props.data.rankedSolo.tier
  const flag = getTier(tier).flag.small
  const position = ordinal(props.position)

  return (
    <div className={style(styles.featured)}>
      <div className={style(styles.user)}>
        <figure className={style(styles.image)}>
          <img className={style(styles.avatar)} src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/profileicon/${props.data.profileIconId}.png`} alt="" />
        </figure>

        <div className={style(styles.info)}>
          <h2 className={style(styles.username)}>{props.data.username}</h2>
          <h3 className={style(styles.summoner)}>{props.data.name}</h3>

          <div className={style(styles.tierInfo)}>
            <h4 className={style(styles.tier)}>{props.data.rankedSolo.tier} {props.data.rankedSolo.division}</h4>
            <span className={style(styles.lp)}>LP {props.data.rankedSolo.lp} / 100</span>
            <Line percent={props.data.rankedSolo.lp} strokeWidth="1" strokeColor="#52bdab" trailWidth="1" trailColor="#fff" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
