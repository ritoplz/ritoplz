'use strict'

import React, { Component } from 'react'
import { Provider } from 'react-redux'

import Meta from '../components/meta'
import Onboard from '../containers/onboard'
import configureStore from '../store/configureStore'
import Header from '../components/header'
import Footer from '../components/footer'
import { isLogged } from './../services/auth'
import Alert from 'react-s-alert'

const store = configureStore()

export default class extends Component {
  constructor () {
    super()

    this.throwError = this.throwError.bind(this)
    store.subscribe(() => store.getState())
  }

  throwError (message) {
    Alert.error(message, {position: 'top-right'})
  }

  throwSuccess (message) {
    Alert.success(message, {position: 'top-right'})
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

            <div className="row">
              <Onboard routing={this.props} throwError={this.throwError} throwSuccess={this.throwSuccess}/>
            </div>

            <Footer />

            <Alert effect="jelly" stack={{limit: 3}}/>
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
