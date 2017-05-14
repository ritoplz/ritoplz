'use strict'

import { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import PropTypes from 'prop-types'
import Router from 'next/router'
import Alert from 'react-s-alert'

import Page from './../layouts/page'

import Header from './../components/header'
import PageTitle from './../components/page-title'
import ActiveSummoners from './../components/summoners-active'
import InactiveSummoners from './../components/summoners-inactive'
import EmptyState from './../components/empty-state'
import { SpinnerIcon } from './../components/icons'
import { Row, Notify, UiLink } from './../components/ui'

import store from './../store/configure-store'
import { fetchAccount } from './../actions/fetch-account'
import { confirmSummoner } from './../actions/confirm-summoner'
import { isLogged } from './../services/auth'

class MySummoners extends Component {
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
    const activeSummoners = []
    const inactiveSummoners = []

    summoners.map(summoner => {
      if (summoner.active) {
        activeSummoners.push(summoner)
      } else {
        inactiveSummoners.push(summoner)
      }
    })

    this.setState({
      summoners: activeSummoners,
      inactiveSummoners,
      fetched: true
    })
  }

  confirmSummoner({ name }) {
    const { confirmSummoner } = this.props
    confirmSummoner(name).then(({ data, error }) => {
      if (data) {
        return Alert.error('Summoner confirmed')
      }

      if (error) {
        return Alert.error(error)
      }

      return Alert.error('Summoner not confirmed yet')
    })
  }

  render() {
    let mySummoners

    if (
      this.props.requested &&
      this.state.summoners &&
      this.state.inactiveSummoners
    ) {
      if (
        this.state.summoners.length > 0 &&
        this.state.inactiveSummoners.length > 0
      ) {
        mySummoners = (
          <div>
            <ActiveSummoners summoners={this.state.summoners} />
            <InactiveSummoners
              summoners={this.state.inactiveSummoners}
              confirmSummoner={this.confirmSummoner}
            />

            <style jsx>{`
              div {
                display: flex;
                justify-content: space-between;
              }
            `}</style>
          </div>
        )
      } else {
        mySummoners = <EmptyState />
      }
    } else {
      mySummoners = <SpinnerIcon customStyle={{ marginTop: '150px' }} />
    }

    return (
      <Page>
        <Header logged={isLogged()} user={this.props.user} />
        <Row>
          <PageTitle title="My summoners">
            <UiLink href="/add-summoner" ui="primary small">
              Add new summoner
            </UiLink>
          </PageTitle>

          {mySummoners}

          <Notify />
        </Row>
      </Page>
    )
  }
}

MySummoners.propTypes = {
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

export default withRedux(store, mapStateToProps, mapDispatchToProps)(
  MySummoners
)
