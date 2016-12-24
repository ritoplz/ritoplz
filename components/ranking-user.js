'use strict'

import React from 'react'
import { style } from 'next/css'
import getTier from 'ritoplz-tier'

const styles = {
  rankingItem: {
    display: 'flex',
    height: '85px',
    paddingLeft: '25px',
    paddingRight: '25px',
    borderBottom: '1px solid #f2f2f2'
  },

  position: {
    lineHeight: '85px',
    flexBasis: '10%',
    color: '#333'
  },

  image: {
    flexBasis: '20%',
    marginTop: '18px'
  },

  avatar: {
    height: '50px',
    width: '50px',
    borderRadius: '5px'
  },

  rankingInfo: {
    marginTop: '20px',
    flexBasis: '50%'
  },

  username: {
    fontSize: '1.25rem',
    fontWeight: '400',
    color: '#333'
  },

  summoner: {
    fontSize: '1rem',
    fontWeight: '400',
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
  }
}

export default (props) => {
  const handleFeatured = () => {
    props.handleShowFeatured(props.position - 1)
  }

  const tier = props.data.rankedSolo.tier
  const flag = getTier(tier).flag.small

  return (
    <li className={style(styles.rankingItem)} onClick={handleFeatured}>
      <h4 className={style(styles.position)}>{props.position}.</h4>

      <figure className={style(styles.image)}>
        <img className={style(styles.avatar)} src={props.avatar} alt="" />
      </figure>

      <div className={style(styles.rankingInfo)}>
        <h2 className={style(styles.username)}>{props.data.username}</h2>
        <h3 className={style(styles.summoner)}>{props.data.name}</h3>
      </div>

      <span className={style(styles.flag)}>
        <img className={style(styles.flagImage)} src={flag} alt="" />
      </span>
    </li>
  )
}
