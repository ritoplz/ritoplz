'use strict'

import React, { Component } from 'react'
import { style } from 'next/css'
import { Provider } from 'react-redux'

import Meta from '../components/meta'
import Onboard from '../containers/onboard'
import configureStore from '../store/configureStore'
import Header from '../components/header'
import Footer from '../components/footer'
import { isLogged } from './../services/auth'

const styles = {
  row: {
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'Source Sans Pro',
    paddingBottom: '50px',

    '@media (max-width: 750px)': {
      paddingLeft: '20px',
      paddingRight: '20px'
    }
  }
}

const store = configureStore()

export default class extends Component {
  constructor () {
    super()

    store.subscribe(() => store.getState())
  }

  render () {
    const items = [
      {name: 'Rankings', link: 'rankings', type: 'item'}
    ]

    if (!isLogged()) {
      this.props.url.replaceTo('/signup')
    }

    return (
      <Provider store={store}>
        <div>
          <Meta />

          <div>
            <Header items={items} />

            <div className={style(styles.row)}>
              <Onboard routing={this.props}/>
            </div>

            <Footer />
          </div>
        </div>
      </Provider>
    )
  }
}
