'use strict'

import { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import Router from 'next/router'

import Page from './../layouts/page'

import Logo from './../components/logo'
import Header from './../components/header'
import { colors, typography } from './../components/ui/theme'

import { logout } from './../services/auth'
import store from './../store/configure-store'

class Logout extends Component {
  componentDidMount() {
    logout()
    Router.push('/')
  }

  render() {
    return (
      <Page>
        <Header />
        <div>
          <Logo size="200px" />
          <h2>😢</h2>
        </div>

        <style jsx>{`
          div {
            padding-top: 150px;
            text-align: center;
          }

          h2 {
            margin-top: 20px;
            font-size: ${typography.f30};
            font-weight: 400;
            color: ${colors.heading};
          }
        `}</style>
      </Page>
    )
  }
}

export default withRedux(store, null, null)(Logout)
