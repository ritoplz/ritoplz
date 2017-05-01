'use strict'

import React, { Component } from 'react'
import Head from 'next/head'
import { Provider } from 'react-redux'

import Meta from '../components/meta'
import ProfileContent from '../containers/profile-content'
import configureStore from '../store/configureStore'
import Header from '../components/header'
import Footer from '../components/footer'
import { isLogged } from './../services/auth'

const store = configureStore()

export default class extends Component {
  constructor () {
    super()

    store.subscribe(() => store.getState())
  }

  render () {
    if (!isLogged()) {
      this.props.url.replaceTo('/login')
    }

    const items = [
      {name: 'Rankings', link: 'rankings', type: 'item'},
      {name: 'Logout', link: 'logout', type: 'item'}
    ]

    return (
      <Provider store={store}>
        <div>
          <Meta />

          <div>
            <Header items={items} />

            <div className="row">
              <ProfileContent/>
            </div>

            <Footer />
          </div>

          <style jsx>{`
            .row {
              max-width: 900px;
              margin-left: auto;
              margin-right: auto;
              font-family: Source Sans Pro;
              padding-bottom: 50px;
            }
          `}</style>
        </div>
      </Provider>
    )
  }
}
