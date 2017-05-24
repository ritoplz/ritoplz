'use strict'

import { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import PropTypes from 'prop-types'
import { I18nextProvider } from 'react-i18next'

import Page from './../layouts/page'

import Header from './../components/header'
import Footer from './../components/footer'
import AboutContext from './../components/about-context'
import { Row } from './../components/ui'

import { isLogged } from './../services/auth'
import { startI18n, getTranslation } from './../services/i18n'
import store from './../store/configure-store'
import { fetchAccount } from './../actions/fetch-account'

class About extends Component {
  static async getInitialProps() {
    const translations = await getTranslation('pt', 'common')

    return { translations }
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
    return (
      <I18nextProvider i18n={this.i18n}>
        <Page>
          <Header logged={isLogged()} user={this.props.user} />

          <Row>
            <AboutContext />
          </Row>

          <Footer />
        </Page>
      </I18nextProvider>
    )
  }
}

About.propTypes = {
  fetchAccount: PropTypes.func.isRequired,
  user: PropTypes.object,
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

export default withRedux(store, mapStateToProps, mapDispatchToProps)(About)
