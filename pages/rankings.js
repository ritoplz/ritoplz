'use strict'

import React, { Component } from 'react'
import { style, insertRule } from 'next/css'
import { Provider } from 'react-redux'

import Header from './../components/header'
import Featured from './../components/featured'
import RankingUser from './../components/ranking-user'
import RankingsList from './../containers/rankings-list'
import configureStore from '../store/configureStore'

const store = configureStore()

const styles = {
  row: {
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}

class Rankings extends Component {
  constructor() {
    super()

    store.subscribe(() => store.getState())
  }

  render () {
    return (
      <Provider store={store}>
        <div>
          <Header />

          <section className={style(styles.row)}>
            <RankingsList />
          </section>
        </div>
      </Provider>
    )
  }
}


insertRule('* {padding: 0; margin: 0; box-sizing: border-box; font-family: Source Sans Pro, Helvetica Neue, Helvetica } li {list-style: none}')

export default Rankings
