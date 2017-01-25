'use strict'

import React, { Component } from 'react'
import { style } from 'next/css'
import { Provider } from 'react-redux'

import Meta from '../components/meta'
import ProfileContent from '../containers/profile-content'
import configureStore from '../store/configure-store'
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
          <Meta/>

          <ProfileContent/>

          <Footer/>
        </div>
      </Provider>
    )
  }
}
