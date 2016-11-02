'use strict'

import React from 'react'
import {style, merge} from 'next/css'

import Summoner from './summoner'

export default props => (
  <section className={style(styles.summoners)}>
    <h2 className={style(styles.title)}>My Summoners</h2>

    {props.summoners.map(summoner => {
      return <Summoner key={summoner.id} cover={summoner.cover} name={summoner.name} code={summoner.code} state={summoner.state} />
    })}
  </section>
)

const styles = {
  summoners: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
  },

  title: {
    color: '#333',
    marginBottom: '50px',
    fontWeight: 400,
    flexBasis: '100%'
  }
}
