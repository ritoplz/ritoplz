'use strict'

import { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import PropTypes from 'prop-types'
import Router from 'next/router'
import Alert from 'react-s-alert'

import { fetchAccount } from './../actions/fetch-account'
import confirmSummoner from './../actions/confirm-summoner'
import Page from './../layouts/page'
import Header from './../components/header'
import { Row, Notify } from './../components/ui'
import ProfileTitle from './../components/profile-title'
import SummonerList from './../components/summoner-list'
import { SpinnerIcon } from './../components/icons'
import store from './../store/configure-store'
import { isLogged } from './../services/auth'
import { colors, typography } from './../components/ui/theme'

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
    let profile

    if (
      this.props.requested &&
      this.state.summoners &&
      this.state.inactiveSummoners
    ) {
      const { user, requested } = this.props
      const location = user.country
        ? `${user.city}, ${user.state} ${user.country}`
        : 'Add your location'

      profile = (
        <section>
          <ProfileTitle user={user} location={location} />

          <div className="summoner-list--active">
            <h2>My summoners</h2>
            <SummonerList
              summoners={this.state.summoners}
              requested={requested}
            />
          </div>

          <div className="summoner-list--inactive">
            <h2>Inactive summoners</h2>
            <SummonerList
              summoners={this.state.inactiveSummoners}
              requested={requested}
              confirmSummoner={this.confirmSummoner}
            />
          </div>

          <style jsx>{`
            section {
              padding-top: 50px;
              padding-bottom: 50px;
            }

            h2 {
              color: ${colors.gray};
              font-weight: 400;
              margin-bottom: 20px;
              font-size: ${typography.f18}
            }

            .summoner-list--active {
              border-bottom: 1px solid ${colors.border};
              margin-bottom: 30px;
              padding-bottom: 10px;
            }

            ul {
              display: flex;
              border-bottom: 1px solid ${colors.border};
              margin-bottom: 40px;
              margin-top: 40px;
            }

            li {
              padding: 12px;
              font-size: ${typography.f14};
              margin-right: 35px;
              text-transform: uppercase;
              font-weight: 600;
              color: ${colors.gray};
              transition: .15s ease-in-out;
              cursor: pointer;
            }

            li:hover {
              color: ${colors.grayDark};
            }

            .active {
              color: ${colors.primary};
              border-bottom: 2px solid ${colors.primary};
            }

            .active:hover {
              color: ${colors.primary};
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
