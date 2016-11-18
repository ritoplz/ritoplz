'use strict'

/* @flow */

import React from 'react'
import { style } from 'next/css'

const propTypes = {
  handleModalSummoner: React.PropTypes.func.isRequired
}

const styles = {
  base: {
    border: '1px solid #F3F5FB',
    borderRadius: '10px',
    textAlign: 'center',
    paddingTop: '50px',
    paddingBottom: '50px',
    boxShadow: '0 10px 50px rgba(0, 0, 0, .025)',
    marginBottom: '70px'
  },

  title: {
    color: '#333',
    fontWeight: '400',
    fontSize: '2rem',
    marginBottom: '15px'
  },

  subtitle: {
    color: '#ccc',
    marginTop: 0,
    fontWeight: '300',
    fontSize: '20px',
    lineHeight: '33px',
    maxWidth: '320px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  btn: {
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 25px',
    fontSize: '.9rem',
    height: '50px',
    marginTop: '30px',
    fontWeight: '500',
    cursor: 'pointer',
    background: 'linear-gradient(to right, #52bdab 0%,#6BB6D6 100%)'
  }
}

type Props = {
  handleModalSummoner: Function
}

const EmptyState = (props: Props) => (
  <section className={style(styles.base)}>
    <h2 className={style(styles.title)}>You dont have any Summoner yet</h2>
    <h3 className={style(styles.subtitle)}>To join the Ritoplz Ranking you must add your summoner</h3>

    <button className={style(styles.btn)} onClick={props.handleModalSummoner}>Add summoner</button>
  </section>
)

EmptyState.propTypes = propTypes

export default EmptyState
