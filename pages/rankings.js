'use strict'

import React, { Component } from 'react'
import { style } from 'next/css'
import { Provider } from 'react-redux'

import Meta from '../components/meta'
import Header from './../components/header'
import Featured from './../components/featured'
import RankingUser from './../components/ranking-user'
import RankingsList from './../containers/rankings-list'
import configureStore from '../store/configureStore'
import Footer from '../components/footer'

const store = configureStore()

const styles = {
  row: {
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto',

    '@media (max-width: 750px)': {
      paddingLeft: '20px',
      paddingRight: '20px'
    }
  }
}

class Rankings extends Component {
  constructor() {
    super()

    store.subscribe(() => store.getState())
  }

  render () {
    const items = [
      {name: 'Login', link: 'login', type: 'item'}
    ]

    return (
      <Provider store={store}>
        <div>
          <Meta />

          <Header items={items} />

          <section className={style(styles.row)}>
            <RankingsList />
          </section>

          <Footer />
        </div>
      </Provider>
    )
  }
}

export default Rankings
