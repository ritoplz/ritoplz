'use strict'

import React from 'react'
import { style } from 'next/css'
import { connect } from 'react-redux'

import fetchRankings from '../actions/fetch-rankings'
import TopPlayer from './../components/top-player'

const styles = {
  row: {
    maxWidth: '1000px',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',

    '@media (max-width: 750px)': {
      paddingLeft: '20px',
      paddingRight: '20px'
    }
  },

  topPlayers: {
    paddingTop: '100px',
    paddingBottom: '100px'
  },

  topPlayersTitle: {
    color: '#333',
    fontSize: '3rem',
    marginBottom: '50px'
  },

  topPlayersList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }
}

export default () => {
  return (
    <section className={style(styles.topPlayers)}>
      <div className={style(styles.row)}>
        <h2 className={style(styles.topPlayersTitle)}>Top players in Brazil</h2>

        <ul className={style(styles.topPlayersList)}>
          <TopPlayer />
        </ul>
      </div>
    </section>
  )
}
