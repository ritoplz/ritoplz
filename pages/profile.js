'use strict'

/* global localStorage: false */

import React, { Component } from 'react'
import axios from 'axios'
import { style } from 'next/css'
import Head from 'next/head'
import { Provider } from 'react-redux'

import Meta from '../components/meta'
import ProfileContent from '../containers/profile-content'
import configureStore from '../store/configureStore'
import Header from '../components/header'
import Footer from '../components/footer'

const styles = {
  row: {
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'Source Sans Pro',
    paddingBottom: '50px'
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
          <Meta />

          <div>
            <Header page="profile"/>

            <div className={style(styles.row)}>
              <ProfileContent/>
            </div>

            <Footer />
          </div>
        </div>
      </Provider>
    )
  }
}
