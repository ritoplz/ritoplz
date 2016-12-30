'use strict'

import React from 'react'
import Link from 'next/link'
import { style } from 'next/css'

const styles = {
  footer: {
    paddingTop: '20px',
    paddingBottom: '20px'
  },

  row: {
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    justifyContent: 'space-between'
  },

  copyright: {
    color: '#666',
    fontSize: '14px'
  },

  item: {
    display: 'inline-block',
    borderRight: '1px solid #ededed',
    verticalAlign: 'middle',
    marginRight: '15px',
    height: '20px',
    lineHeight: '20px',
    paddingRight: '15px'
  },

  link: {
    color: '#666',
    textDecoration: 'none',
    fontSize: '12px',
    transition: 'all .2s ease',
    textDecoration: 'none',

    ':hover': {
      color: '#ccc'
    }
  }
}

export default props => {
  return (
    <footer className={style(styles.footer)}>
      <div className={style(styles.row)}>
        <span className={style(styles.copyright)}>Copyright © 2016 Ritoplz. All rights reserved.</span>

        <nav className={style(styles.footerLinks)}>
          <ul>
            <li className={style(styles.item)}>
              <Link href="">
                <img src="/static/github.svg"/>
              </Link>
            </li>

            <li className={style(styles.item)}>
              <Link href="">
                <img src="/static/twitter.svg"/>
              </Link>
            </li>

            <li className={style(styles.item)}>
              <Link href="">
                <span className={style(styles.link)}>Terms of Service</span>
              </Link>
            </li>

            <li className={style(styles.item)}>
              <Link href="">
                <span className={style(styles.link)}>FAQ</span>
              </Link>
            </li>

            <li className={style(styles.item)}>
              <Link href="">
                <span className={style(styles.link)}>ritoplz@gmail.com</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
