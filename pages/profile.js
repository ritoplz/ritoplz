'use strict'

/* global localStorage: false */

import React, { Component } from 'react'
import axios from 'axios'
import { style, insertRule } from 'next/css'
import Head from 'next/head'
import { Provider } from 'react-redux'

import Intro from '../components/intro'
import configureStore from '../store/configureStore'

const styles = {
  row: {
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'Source Sans Pro'
  },

  notification: {
    backgroundColor: 'red'
  }
}

const store = configureStore()

export default class extends Component {
  constructor () {
    super()

    store.subscribe(() => store.getState())
  }

  render () {
    return (
      <Provider store={store}>
        <div>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" href="https://unpkg.com/react-select/dist/react-select.css"/>
            <meta charSet="utf-8"/>
          </Head>

          <div className={style(styles.row)}>
            <Intro/>
          </div>
        </div>
      </Provider>
    )
  }
}

insertRule('* {padding: 0; margin: 0; box-sizing: border-box; font-family: Source Sans Pro, Helvetica Neue, Helvetica }')
