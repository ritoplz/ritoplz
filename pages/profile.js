'use strict'

import { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import PropTypes from 'prop-types'
import Router from 'next/router'

import Page from './../layouts/page'

import PageTitle from './../components/page-title'
import Header from './../components/header'
import Summoners from './../components/summoners'
import Stats from './../components/stats'
import LatestMatches from './../components/latest-matches'
import { Row, Notify } from './../components/ui'
import { SpinnerIcon } from './../components/icons'

import { isLogged } from './../services/auth'
import store from './../store/configure-store'
import { fetchAccount } from './../actions/fetch-account'
import { confirmSummoner } from './../actions/confirm-summoner'

class Profile extends Component {
  constructor() {
    super()

    this.selectSummoner = this.selectSummoner.bind(this)

    this.state = {
      fetched: false,
      summonerSelected: 0
    }
  }

  componentDidMount() {
    const { fetchAccount } = this.props

    if (isLogged()) {
      return fetchAccount().then(res => {
        if (res.error) {
          Router.push('/profile')
        }
      })
    }

    Router.push('/login')
  }

  componentWillReceiveProps({ summoners }) {
    const activeSummoners = []

    summoners.map(summoner => {
      if (summoner.active) {
        activeSummoners.push(summoner)
      }
    })

    this.setState({
      summoners: activeSummoners,
      fetched: true
    })
  }

  selectSummoner(summonerSelected) {
    this.setState({ summonerSelected })
  }

  render() {
    let profile

    if (this.props.requested && this.state.summoners) {
      profile = (
        <div>
          <PageTitle title="Summoners" />
          <Summoners
            summoners={this.state.summoners}
            summonerSelected={this.state.summonerSelected}
            selectSummoner={index => this.selectSummoner(index)}
          />
          <Stats info={this.state.summoners[this.state.summonerSelected]} />

          <PageTitle title="Latest matches" />
          <LatestMatches
            info={this.state.summoners[this.state.summonerSelected]}
          />
        </div>
      )
    } else {
      profile = <SpinnerIcon customStyle={{ marginTop: '150px' }} />
    }

    return (
      <Page>
        <Header logged={isLogged()} user={this.props.user} />
        <Row>
          {profile}
          <Notify />
        </Row>
      </Page>
    )
  }
}

Profile.propTypes = {
  user: PropTypes.object,
  fetchAccount: PropTypes.func,
  summoners: PropTypes.array,
  requested: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    user: state.account.data.user,
    summoners: state.account.data.summoners,
    requested: state.account.requested
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAccount: () => dispatch(fetchAccount()),
    confirmSummoner: summoner => dispatch(confirmSummoner(summoner))
  }
}

export default withRedux(store, mapStateToProps, mapDispatchToProps)(Profile)
