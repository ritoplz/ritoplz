'use strict'

import { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import PropTypes from 'prop-types'
import Router from 'next/router'
import Alert from 'react-s-alert'
import { I18nextProvider } from 'react-i18next'

import Page from './../layouts/page'

import { UiButton, TextInput, Row, Notify } from './../components/ui'
import { colors, typography, phone } from './../components/ui/theme'
import Header from './../components/header'

import { isLogged } from './../services/auth'
import { startI18n, getTranslation } from './../services/i18n'
import store from './../store/configure-store'
import { fetchAccount } from './../actions/fetch-account'
import { resetPassword } from './../actions/reset-password'

class ResetPassword extends Component {
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
    this.resetPassword = this.resetPassword.bind(this)
  }

  componentDidMount() {
    const { fetchAccount } = this.props

    if (isLogged()) {
      return fetchAccount().then(res => {
        if (res.error) {
          Router.push('/login')
        }
      })
    }
  }

  resetPassword(e) {
    e.preventDefault()
    const { resetPassword } = this.props
    const userData = { email: this.email }

    resetPassword(userData).then(({ data, error }) => {
      if (data) {
        Alert.success('Instructions sent to your email.')
        Router.push('/login')
      }

      if (error) {
        Alert.error(
          'We were not able to reset your password at the moment, please contact us.'
        )
      }
    })
  }

  render() {
    return (
      <I18nextProvider i18n={this.i18n}>
        <Page>
          <Header logged={isLogged()} user={this.props.user} />
          <Row>
            <h2>Reset your password</h2>
            <p>
              Forgot your password? Happens all the time. Enter your email below to reset it.
            </p>

            <form onSubmit={this.resetPassword}>
              <TextInput
                label="Email"
                placeholder="ritoplz@gmail.com"
                type="email"
                inputRef={ref => {
                  this.email = ref
                }}
              />

              <UiButton ui="primary block" type="submit">
                Reset password
              </UiButton>
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

ResetPassword.propTypes = {
  fetchAccount: PropTypes.func.isRequired,
  resetPassword: PropTypes.func.isRequired,
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
    resetPassword: email => dispatch(resetPassword(email))
  }
}

export default withRedux(store, mapStateToProps, mapDispatchToProps)(
  ResetPassword
)
