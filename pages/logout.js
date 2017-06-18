'use strict'

import { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import PropTypes from 'prop-types'
import Router from 'next/router'
import { I18nextProvider } from 'react-i18next'

import Page from './../layouts/page'

import Logo from './../components/logo'
import Header from './../components/header'
import { colors, typography } from './../components/ui/theme'

import { logout } from './../services/auth'
import { startI18n, getTranslation } from './../services/i18n'
import store from './../store/configure-store'

class Logout extends Component {
  static async getInitialProps() {
    const translations = await getTranslation('pt', 'common')

    return { translations }
  }

  constructor(props) {
    super(props)

    this.i18n = startI18n(props.translations)
  }

  componentDidMount() {
    logout()
    Router.push('/')
  }

  render() {
    return (
      <I18nextProvider i18n={this.i18n}>
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
      </I18nextProvider>
    )
  }
}

Logout.propTypes = {
  translations: PropTypes.object
}

export default withRedux(store, null, null)(Logout)
