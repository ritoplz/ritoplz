'use strict'

import { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import PropTypes from 'prop-types'
import Router from 'next/router'
import Alert from 'react-s-alert'
import { I18nextProvider } from 'react-i18next'

import Page from './../layouts/page'

import { UiButton, TextInput, Row, Notify } from './../components/ui'
import { phone } from './../components/ui/theme'
import Header from './../components/header'
import Footer from './../components/footer'
import ResetPasswordContext from './../components/reset-password-context'

import { isLogged } from './../services/auth'
import { startI18n, getTranslation } from './../services/i18n'
import store from './../store/configure-store'
import { fetchAccount } from './../actions/fetch-account'
import { resetPassword } from './../actions/reset-password'

class ResetPassword extends Component {
  static async getInitialProps() {
    const translations = await getTranslation('pt', 'common')

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
    const userData = { email: this.email.value }
    resetPassword(userData).then(({ data, error }) => {
      if (data) {
        Alert.success('Instructions sent to your email.')
        Router.push('/login')
      }

      if (error) {
        Alert.error(error.message)
      }
    })
  }

  render() {
    return (
      <I18nextProvider i18n={this.i18n}>
        <Page>
          <Header logged={isLogged()} user={this.props.user} />
          <Row>
            <ResetPasswordContext />

            <form onSubmit={this.resetPassword}>
              <TextInput
                label="Email"
                placeholder="ritoplzteam@gmail.com"
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

          <Footer />

          <style jsx>{`
            form {
              max-width: 60%;
              margin-left: auto;
              margin-right: auto;
              padding-bottom: 100px;
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
