'use strict'

import React from 'react'
import { style } from 'next/css'

export default props => (
  <article className={style(styles.base)}>
    <header className={style(styles.header)}>
      <img className={style(styles.cover)} src={props.cover} alt="" />
    </header>

    <ul className={style(styles.info)}>
      <li className={style(styles.item)}>
        <h3 className={style(styles.title)}>Summoner</h3>
        <span className={style(styles.subtitle)}>{props.name}</span>
      </li>

      <li className={style(styles.item)}>
        <h3 className={style(styles.title)}>Code</h3>
        <span className={style(styles.subtitle)}>{props.code}</span>
      </li>

      <li className={style(styles.item)}>
        <h3 className={style(styles.title)}>Status</h3>
        <span>
          <img className={style(styles.checkmark)} src="/static/checkmark.png" alt=""/>
        </span>
      </li>
    </ul> 
  </article>
)

const styles = {
  base: {
    flexBasis: 'calc(50% - 30px)',
    margin: '15px'
  },

  cover: {
    width: '100%'
  },

  info: {
    borderLeft: '1px solid #F3F5FB',
    borderBottom: '1px solid #F3F5FB',
    borderRight: '1px solid #F3F5FB',
    marginTop: 0,
    width: '100%',
    paddingLeft: 0,
    paddingRight: 0,
    boxSizing: 'border-box',
    borderBottomRightRadius: '10px',
    borderBottomLeftRadius: '10px'
  },

  item: {
    display: 'inline-block',
    width: '33.33%',
    textAlign: 'center',
    paddingTop: '20px',
    paddingBottom: '20px'
  },


  title: {
    marginTop: 0,
    fontWeight: 400,
    fontSize: '.9rem',
    color: '#ccc',
    marginBottom: '5px'
  },

  subtitle: {
    fontSize: '1.2rem',
    fontWeight: 600,
    color: '#333'
  },

  checkmark: {
    verticalAlign: 'middle'
  }
}
