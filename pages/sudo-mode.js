'use strict'

import { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Router from 'next/router'
import Alert from 'react-s-alert'
import { I18nextProvider } from 'react-i18next'

import Page from './../layouts/page'

import Header from './../components/header'
import Footer from './../components/footer'
import { UiButton, TextInput, Row, Notify } from './../components/ui'
import { colors, typography, phone } from './../components/ui/theme'

import { isLogged } from './../services/auth'
import { startI18n, getTranslation } from './../services/i18n'
import store from './../store/configure-store'
import { fetchAccount } from './../actions/fetch-account'
import { editUser } from './../actions/edit-user'

class SudoMode extends Component {
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
    this.handleSudoMode = this.handleSudoMode.bind(this)
  }

  componentDidMount() {
    const { query } = this.props.url

    if (!query.hasOwnProperty('newEmail')) {
      if (isLogged()) {
        return Router.push('/my-summoner')
      }

      return Router.push('/login')
    }

    if (isLogged()) {
      fetchAccount()
    }
  }

  handleSudoMode(e) {
    e.preventDefault()

    const { editUser, url } = this.props

    if (url.query.hasOwnProperty('newEmail')) {
      const { name, newEmail } = url.query
      const password = this.password.value
      const data = { name, newEmail, password }

      editUser(data).then(({ error }) => {
        if (error) {
          return Alert.error(error)
        }

        Router.push('/my-summoner')
      })
    }
  }

  render() {
    return (
      <I18nextProvider i18n={this.i18n}>
        <Page>
          <Header logged={isLogged()} user={this.props.user} />
          <Row>
            <h2>Confirm password to continue</h2>
            <p>
              You are entering sudo mode. We won’t ask for your password again for a few hours.
            </p>

            <form onSubmit={this.handleSudoMode}>
              <TextInput
                label="Password"
                placeholder="Your password"
                type="password"
                inputRef={ref => {
                  this.password = ref
                }}
              />

              <Link href="/reset-password">
                <span>
                  Forgot your password?
                </span>
              </Link>

              <UiButton ui="primary block" type="submit">
                Confirm password
              </UiButton>
            </form>

            <Notify />
          </Row>

          <Footer />

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

            span {
              display: block;
              font-size: ${typography.f14};
              color: ${colors.gray};
              margin-bottom: 50px;
              transition: .15s ease-in-out;
              cursor: pointer;
              display: flex;
              flex-direction: row-reverse;
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

SudoMode.propTypes = {
  fetchAccount: PropTypes.func.isRequired,
  editUser: PropTypes.func.isRequired,
  user: PropTypes.object,
  translations: PropTypes.object,
  url: {
    query: PropTypes.object
  }
}

const mapStateToProps = state => {
  return {
    user: state.account.data.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAccount: () => dispatch(fetchAccount()),
    editUser: userData => dispatch(editUser(userData))
  }
}

export default withRedux(store, mapStateToProps, mapDispatchToProps)(SudoMode)
