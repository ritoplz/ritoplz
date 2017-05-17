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
import { fetchProfile } from './../actions/fetch-profile'

class Player extends Component {
  static async getInitialProps({ query: { username } }) {
    const translations = await getTranslation(
      'pt',
      'common',
      'http://localhost:3000/static/locales/'
    )

    return { translations, username }
  }

  constructor(props) {
    super(props)

    this.i18n = startI18n(props.translations)
  }

  componentDidMount() {
    const { fetchAccount, fetchProfile, username } = this.props

    fetchProfile(username)

    if (isLogged()) {
      fetchAccount()
    }
  }

  render() {
    const { username, profile } = this.props
    let profileUser

    if (profile) {
      profileUser = (
        <h1>{profile.city}</h1>
      )
    }

    return (
      <I18nextProvider i18n={this.i18n}>
        <Page>
          <Header logged={isLogged()} user={this.props.user} />

          <Row>
            <h1>Player {username}</h1>
            {profileUser}
          </Row>

          <Footer />
        </Page>
      </I18nextProvider>
    )
  }
}

Player.propTypes = {
  fetchAccount: PropTypes.func.isRequired,
  fetchProfile: PropTypes.func.isRequired,
  user: PropTypes.object,
  username: PropTypes.string.isRequired,
  translations: PropTypes.object
}

const mapStateToProps = state => {
  return {
    user: state.account.data.user,
    profile: state.profile.data.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAccount: () => dispatch(fetchAccount()),
    fetchProfile: username => dispatch(fetchProfile(username))
  }
}

export default withRedux(store, mapStateToProps, mapDispatchToProps)(Player)
