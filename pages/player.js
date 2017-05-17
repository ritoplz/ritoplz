'use strict'

import { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import PropTypes from 'prop-types'
import { I18nextProvider } from 'react-i18next'

import Page from './../layouts/page'

import { Row } from './../components/ui'
import Footer from './../components/footer'
import Header from './../components/header'

import { isLogged } from './../services/auth'
import { startI18n, getTranslation } from './../services/i18n'
import store from './../store/configure-store'
import { fetchAccount } from './../actions/fetch-account'

class Player extends Component {
  static async getInitialProps({ query: { name } }) {
    const translations = await getTranslation(
      'pt',
      'common',
      'http://localhost:3000/static/locales/'
    )

    return { translations, name }
  }

  constructor(props) {
    super(props)

    this.i18n = startI18n(props.translations)
  }

  componentDidMount() {
    const { fetchAccount } = this.props

    if (isLogged()) {
      fetchAccount()
    }
  }

  render() {
    const { name } = this.props

    return (
      <I18nextProvider i18n={this.i18n}>
        <Page>
          <Row>
            <Header logged={isLogged()} user={this.props.user} />

            <h1>Player {name}</h1>
          </Row>

          <Footer />
        </Page>
      </I18nextProvider>
    )
  }
}

Player.propTypes = {
  fetchAccount: PropTypes.func.isRequired,
  user: PropTypes.object,
  name: PropTypes.string.isRequired,
  translations: PropTypes.object
}

const mapStateToProps = state => {
  return {
    user: state.account.data.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAccount: () => dispatch(fetchAccount())
  }
}

export default withRedux(store, mapStateToProps, mapDispatchToProps)(Player)
