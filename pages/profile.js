'use strict'

import { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import PropTypes from 'prop-types'
import { I18nextProvider } from 'react-i18next'

import Page from './../layouts/page'

import PageTitle from './../components/page-title'
import Summoners from './../components/summoners'
import Stats from './../components/stats'
import LatestMatches from './../components/latest-matches'
import EmptyState from './../components/empty-state'
import { SpinnerIcon } from './../components/icons'
import { Row } from './../components/ui'
import Footer from './../components/footer'
import Header from './../components/header'

import { isLogged } from './../services/auth'
import { startI18n, getTranslation } from './../services/i18n'
import store from './../store/configure-store'
import { fetchAccount } from './../actions/fetch-account'
import { fetchProfile } from './../actions/fetch-profile'

class Profile extends Component {
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
    this.selectSummoner = this.selectSummoner.bind(this)

    this.state = {
      fetched: false,
      summonerSelected: 0,
      summoners: []
    }
  }

  componentDidMount() {
    const { fetchAccount, fetchProfile, username } = this.props

    fetchProfile(username).then(({ data }) =>
      this.setState({ summoners: data.user.summoners, fetched: true })
    )

    if (isLogged()) {
      fetchAccount()
    }
  }

  selectSummoner(summonerSelected) {
    this.setState({ summonerSelected })
  }

  render() {
    const { fetched, summoners, summonerSelected } = this.state
    let profileUser

    if (fetched) {
      if (summoners.length > 0) {
        profileUser = (
          <div>
            <PageTitle title="Summoners" />
            <Summoners
              summoners={summoners}
              summonerSelected={summonerSelected}
              selectSummoner={index => this.selectSummoner(index)}
            />
            <Stats info={summoners[summonerSelected]} />

            <PageTitle title="Latest matches" />
            <LatestMatches info={summoners[summonerSelected]} />
          </div>
        )
      } else {
        profileUser = <EmptyState />
      }
    } else {
      profileUser = <SpinnerIcon customStyle={{ marginTop: '150px' }} />
    }

    return (
      <I18nextProvider i18n={this.i18n}>
        <Page>
          <Header logged={isLogged()} user={this.props.user} />

          <Row>
            {profileUser}
          </Row>

          <Footer />
        </Page>
      </I18nextProvider>
    )
  }
}

Profile.propTypes = {
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

export default withRedux(store, mapStateToProps, mapDispatchToProps)(Profile)
