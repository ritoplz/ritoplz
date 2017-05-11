'use strict'

import { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import PropTypes from 'prop-types'
import Router from 'next/router'

import fetchAccount from './../actions/fetch-account'
import confirmSummoner from './../actions/confirm-summoner'
import Page from './../layouts/page'
import Header from './../components/header'
import { Row } from './../components/ui'
import ProfileTitle from './../components/profile-title'
import SummonerList from './../components/summoner-list'
import { SpinnerIcon } from './../components/icons'
import store from './../store/configure-store'
import { isLogged } from './../services/auth'

class Profile extends Component {
  constructor() {
    super()

    this.confirmSummoner = this.confirmSummoner.bind(this)

    this.state = {
      fetched: false
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
    this.setState({ summoners, fetched: true })
  }

  confirmSummoner({ name }) {
    const { confirmSummoner } = this.props
    confirmSummoner(name).then(({ data }) => console.log(data))
  }

  render() {
    let profile
    if (this.props.requested) {
      profile = (
        <section>
          <ProfileTitle user={this.props.user} />
          <SummonerList
            summoners={this.props.summoners}
            requested={this.props.requested}
            confirmSummoner={this.confirmSummoner}
          />

          <style jsx>{`
            section {
              padding-top: 50px;
              padding-bottom: 50px;
            }
          `}</style>
        </section>
      )
    } else {
      profile = <SpinnerIcon customStyle={{ marginTop: '150px' }} />
    }

    return (
      <Page>
        <Header logged={isLogged()} user={this.props.user} />
        <Row>
          {profile}
        </Row>
      </Page>
    )
  }
}

Profile.propTypes = {
  user: PropTypes.object,
  fetchAccount: PropTypes.func,
  summoners: PropTypes.array,
  requested: PropTypes.bool,
  confirmSummoner: PropTypes.func.isRequired
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
