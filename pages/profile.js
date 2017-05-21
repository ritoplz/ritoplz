'use strict'

import { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import PropTypes from 'prop-types'
import { I18nextProvider } from 'react-i18next'
import axios from 'axios'

import Page from './../layouts/page'

import ProfileUser from './../components/profile-user'
import ProfileData from './../components/profile-data'
import { SpinnerIcon } from './../components/icons'
import { Row } from './../components/ui'
import Footer from './../components/footer'
import Header from './../components/header'

import { isLogged } from './../services/auth'
import { startI18n, getTranslation } from './../services/i18n'
import store from './../store/configure-store'
import { fetchAccount } from './../actions/fetch-account'
import { selectSummoner } from './../actions/profile-summoner'
import { fetchProfile } from './../actions/fetch-profile'

class Profile extends Component {
  static async getInitialProps({ query: { username } }) {
    const translations = await getTranslation('pt', 'common')
    const champions = await axios(
      'https://ddragon.leagueoflegends.com/cdn/7.10.1/data/en_US/champion.json'
    ).then(({ data }) => data.data)

    return { translations, username, champions }
  }

  constructor(props) {
    super(props)

    this.i18n = startI18n(props.translations)
    this.changeSummoner = this.changeSummoner.bind(this)
  }

  componentDidMount() {
    const { fetchAccount, fetchProfile, username } = this.props

    fetchProfile(username)

    if (isLogged()) {
      fetchAccount()
    }
  }

  changeSummoner(index) {
    const { selectSummoner } = this.props
    selectSummoner(index)
  }

  render() {
    const { profile, requested, summonerSelected, champions, user } = this.props
    const style = { marginTop: '100px', marginBottom: '100px' }
    let profileUser
    let profileData

    if (profile && requested) {
      profileUser = (
        <ProfileUser
          profile={profile}
          currentUser={user}
          index={summonerSelected}
          changeSummoner={this.changeSummoner}
        />
      )

      profileData = (
        <ProfileData
          profile={profile}
          currentUser={user}
          index={summonerSelected}
          champions={champions}
        />
      )
    } else {
      profileUser = <SpinnerIcon customStyle={style} />
    }

    return (
      <I18nextProvider i18n={this.i18n}>
        <Page>
          <Header logged={isLogged()} user={this.props.user} />

          <Row>
            <div>
              {profileUser}
              {profileData}
            </div>
          </Row>

          <Footer />

          <style jsx>{`div {min-height: 58vh}`}</style>
        </Page>
      </I18nextProvider>
    )
  }
}

Profile.propTypes = {
  fetchAccount: PropTypes.func.isRequired,
  fetchProfile: PropTypes.func.isRequired,
  user: PropTypes.object,
  summonerSelected: PropTypes.number,
  selectSummoner: PropTypes.func,
  requested: PropTypes.bool,
  profile: PropTypes.object,
  username: PropTypes.string.isRequired,
  translations: PropTypes.object,
  champions: PropTypes.object
}

const mapStateToProps = state => {
  return {
    user: state.account.data.user,
    profile: state.profile.data.user,
    requested: state.profile.requested,
    summonerSelected: state.profileSummoner.selected
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAccount: () => dispatch(fetchAccount()),
    fetchProfile: username => dispatch(fetchProfile(username)),
    selectSummoner: index => dispatch(selectSummoner(index))
  }
}

export default withRedux(store, mapStateToProps, mapDispatchToProps)(Profile)
