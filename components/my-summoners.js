'use strict'

import React from 'react'
import { style } from 'next/css'

import Summoner from './summoner'

const styles = {
  title: {
    color: '#333',
    marginBottom: '50px',
    fontWeight: 400
  },

  btn: {
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 25px',
    fontSize: '.9rem',
    height: '50px',
    marginTop: '-50px',
    fontWeight: '500',
    cursor: 'pointer',
    background: 'linear-gradient(to right, #52bdab 0%,#6BB6D6 100%)'
  },

  row: {
    marginLeft: '-15px',
    marginRight: '-15px',
    display: 'flex',
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}

const MySummoners = props => (
  <section>
    <header>
      <h2 className={style(styles.title)}>My Summoners</h2>
      <button className={style(styles.btn)}>Add Summoner</button>
    </header>

    <div className={style(styles.row)}>
      {props.summoners.map(summoner => {
        return <Summoner key={summoner._id} cover="/static/ashe.png" name={summoner.name} code={summoner.code} state={summoner.state}/>
      })}
    </div>
  </section>
)

export default MySummoners
