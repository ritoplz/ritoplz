'use strict'

import React from 'react'
import { style } from 'next/css'

import Summoner from './summoner'

const styles = {
  summoners: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  header: {
    flexBasis: '100%'
  },

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
  }
}

const MySummoners = props => (
  <section className={style(styles.summoners)}>
    <header className={style(styles.header)}>
      <h2 className={style(styles.title)}>My Summoners</h2>
      <button className={style(styles.btn)} onClick={props.handleModalSummoner}>Add Summoner</button>
    </header>

    {props.summoners.map(summoner => {
      return <Summoner key={summoner.id} cover='/static/ashe.png' name={summoner.name} code={summoner.code} state={summoner.state}/>
    })}
  </section>
)

MySummoners.propTypes = {
  handleModalSummoner: React.PropTypes.func,
  summoners: React.PropTypes.array
}

export default MySummoners
