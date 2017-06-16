'use strict'

import { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import PropTypes from 'prop-types'
import Router from 'next/router'
import Alert from 'react-s-alert'
import { I18nextProvider } from 'react-i18next'

import Page from './../layouts/page'

import Header from './../components/header'
import PageTitle from './../components/page-title'
import ActiveSummoners from './../components/summoners-active'
import InactiveSummoners from './../components/summoners-inactive'
import EmptyState from './../components/empty-state'
import { SpinnerIcon } from './../components/icons'
import { Row, Notify, UiLink } from './../components/ui'
import Footer from './../components/footer'

import { isLogged } from './../services/auth'
import { startI18n, getTranslation } from './../services/i18n'
import store from './../store/configure-store'
import { fetchAccount } from './../actions/fetch-account'
import { confirmSummoner } from './../actions/confirm-summoner'
import { deleteSummoner } from './../actions/delete-summoner'

class MySummoners extends Component {
  static async getInitialProps() {
    const translations = await getTranslation('pt', 'common')

    return { translations }
  }

  constructor(props) {
    super(props)
    this.i18n = startI18n(props.translations)
    this.confirmSummoner = this.confirmSummoner.bind(this)
    this.deleteSummoner = this.deleteSummoner.bind(this)

    this.state = {
      fetched: false
    }
  }

  componentDidMount() {
    const { fetchAccount } = this.props

    if (isLogged()) {
      return fetchAccount().then(res => {
        if (res.error) {
          Router.push('/my-summoners')
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
        return Alert.success('Summoner confirmed')
      }

      if (error) {
        return Alert.error(error)
      }

      return Alert.error('Summoner not confirmed yet')
    })
  }

  deleteSummoner(summonerId) {
    const { deleteSummoner } = this.props
    deleteSummoner(summonerId).then(({ data }) => {
      if (data) {
        return Alert.success('Summoner deleted')
      }

      return Alert.error('Try again in a few minutes')
    })
  }

  render() {
    let mySummoners
    const { summoners, inactiveSummoners } = this.state

    if (this.props.requested && summoners && inactiveSummoners) {
      if (summoners.length > 0 || inactiveSummoners.length > 0) {
        mySummoners = (
          <section>
            <PageTitle title="My summoners">
              <UiLink href="/add-summoner" ui="primary small">
                Add new summoner
              </UiLink>
            </PageTitle>

            <div>
              <ActiveSummoners
                summoners={summoners}
                deleteSummoner={this.deleteSummoner}
              />
              <InactiveSummoners
                summoners={inactiveSummoners}
                confirmSummoner={this.confirmSummoner}
              />
            </div>

            <style jsx>{`
              div {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
              }

              section {
                min-height: 50vh;
              }
            `}</style>
          </section>
        )
      } else {
        mySummoners = <EmptyState />
      }
    } else {
      mySummoners = <SpinnerIcon customStyle={{ marginTop: '150px' }} />
    }

    return (
      <I18nextProvider i18n={this.i18n}>
        <Page>
          <Header logged={isLogged()} user={this.props.user} />
          <Row>
            {mySummoners}

            <Notify />
          </Row>

          <Footer />
        </Page>
      </I18nextProvider>
    )
  }
}

MySummoners.propTypes = {
  user: PropTypes.object,
  fetchAccount: PropTypes.func,
  summoners: PropTypes.array,
  requested: PropTypes.bool,
  confirmSummoner: PropTypes.func.isRequired,
  translations: PropTypes.object,
  deleteSummoner: PropTypes.func.isRequired
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
    confirmSummoner: summoner => dispatch(confirmSummoner(summoner)),
    deleteSummoner: summonerId => dispatch(deleteSummoner(summonerId))
  }
}

export default withRedux(store, mapStateToProps, mapDispatchToProps)(
  MySummoners
)
