'use strict'

import { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import PropTypes from 'prop-types'
import Router from 'next/router'
import Alert from 'react-s-alert'
import { I18nextProvider } from 'react-i18next'

import Page from './../layouts/page'
import { UiButton, UiLink, TextInput, Row, Notify } from './../components/ui'
import { colors, typography, phone } from './../components/ui/theme'
import Header from './../components/header'

import { isLogged } from './../services/auth'
import { startI18n, getTranslation } from './../services/i18n'
import store from './../store/configure-store'
import { fetchAccount } from './../actions/fetch-account'
import { addSummoner } from './../actions/add-summoner'

class AddSummoner extends Component {
  static async getInitialProps() {
    const translations = await getTranslation(
      'pt',
      'common',
      'http://localhost:3000/static/locales/'
    )

    return { translations }
  }

  constructor(props) {
    super(props)
    this.i18n = startI18n(props.translations)
    this.addSummoner = this.addSummoner.bind(this)
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

  addSummoner(e) {
    e.preventDefault()
    const { addSummoner } = this.props
    const summoner = { name: this.summoner.value }
    addSummoner(summoner).then(({ data, error }) => {
      if (error) {
        return Alert.error(error)
      }

      Router.push({
        pathname: '/how-to',
        query: { code: data.code }
      })
    })
  }

  render() {
    return (
      <I18nextProvider i18n={this.i18n}>
        <Page>
          <Header logged={isLogged()} user={this.props.user} />
          <Row>
            <h2>Add summoner</h2>
            <p>
              Add and confirm your summoner to enter our Ranking.
            </p>

            <form onSubmit={this.addSummoner}>
              <TextInput
                label="Summoner name"
                placeholder="Summoner name"
                inputRef={ref => {
                  this.summoner = ref
                }}
              />

              <UiButton ui="primary block" type="submit">Add summoner</UiButton>
              <UiLink
                href="/my-summoners"
                ui="link block small"
                customStyle={{ marginTop: '10px' }}
              >
                Back to profile
              </UiLink>
            </form>

            <Notify />
          </Row>

          <style jsx>{`
            h2 {
              text-align: center;
              padding-top: 120px;
              font-size: ${typography.f30};
              color: ${colors.grayDark};
              margin-bottom: 8px;
              font-weight: 600;
            }

            p {
              text-align: center;
              margin-bottom: 50px;
              font-size: ${typography.f16};
              color: ${colors.gray};
            }

            form {
              max-width: 60%;
              margin-left: auto;
              margin-right: auto;
            }

            @media ${phone} {
              form {
                max-width: 90%;
              }
            }
          `}</style>
        </Page>
      </I18nextProvider>
    )
  }
}

AddSummoner.propTypes = {
  fetchAccount: PropTypes.func.isRequired,
  addSummoner: PropTypes.func.isRequired,
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
    fetchAccount: () => dispatch(fetchAccount()),
    addSummoner: summoner => dispatch(addSummoner(summoner))
  }
}

export default withRedux(store, mapStateToProps, mapDispatchToProps)(
  AddSummoner
)
