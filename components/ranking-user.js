'use strict'

import React from 'react'
import { style } from 'next/css'

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
    marginTop: '15px'
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
  }
}

export default (props) => {
  return (
    <li className={style(styles.rankingItem)}>
      <h4 className={style(styles.position)}>{props.position}.</h4>

      <figure className={style(styles.image)}>
        <img className={style(styles.avatar)} src={props.avatar} alt="" />
      </figure>

      <div className={style(styles.rankingInfo)}>
        <h2 className={style(styles.username)}>{props.username}</h2>
        <h3 className={style(styles.summoner)}>{props.summoner}</h3>
      </div>

      <img className={style(styles.flag)} src={props.flag} alt="" />
    </li>
  )
}
