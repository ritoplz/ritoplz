'use strict'

import { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import PropTypes from 'prop-types'
import Router from 'next/router'

import { fetchAccount } from './../actions/fetch-account'
import { confirmSummoner } from './../actions/confirm-summoner'
import Page from './../layouts/page'
import PageTitle from './../components/page-title'
import Header from './../components/header'
import { Row, Notify } from './../components/ui'
import { SpinnerIcon } from './../components/icons'
import store from './../store/configure-store'
import { isLogged } from './../services/auth'

class Profile extends Component {
  constructor() {
    super()

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

  render() {
    let profile

    if (this.props.requested && this.state.summoners) {
      profile = (
        <section>
          <PageTitle title="My summoners" />

          <style jsx>{`
            section {
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
