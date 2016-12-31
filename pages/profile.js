'use strict'

/* global localStorage: false */

import React, { Component } from 'react'
import axios from 'axios'
import { style, insertRule } from 'next/css'
import Head from 'next/head'
import { Provider } from 'react-redux'

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
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" href="https://unpkg.com/react-select/dist/react-select.css"/>
            <link rel="stylesheet" href="/static/stylesheets/vendors/react-select/react-select.css"/>
            <link rel="stylesheet" href="/static/stylesheets/vendors/alert/alert.css"/>
            <meta charSet="utf-8"/>
          </Head>

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

insertRule('* {padding: 0; margin: 0; box-sizing: border-box; font-family: Source Sans Pro, Helvetica Neue, Helvetica } li { list-style: none } a { text-decoration: none}')
