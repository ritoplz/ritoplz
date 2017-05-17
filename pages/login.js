'use strict'

import { Component } from 'react'
import PropTypes from 'prop-types'
import goot from 'goot'
import withRedux from 'next-redux-wrapper'
import Router from 'next/router'
import Link from 'next/link'
import Alert from 'react-s-alert'
import { I18nextProvider } from 'react-i18next'

import Page from './../layouts/page'

import RegisterSidebar from './../components/register-sidebar'
import RegisterMain from './../components/register-main'
import RegisterFooter from './../components/register-footer'
import { UiButton, UiLink, TextInput, Notify } from './../components/ui'
import { colors, typography } from './../components/ui/theme'

import { setToken } from './../services/auth'
import { startI18n, getTranslation } from './../services/i18n'
import store from './../store/configure-store'
import { onLogin } from './../actions/login'

class Login extends Component {
  static async getInitialProps() {
    const translations = await getTranslation(
      'pt',
      'common',
      'http://localhost:3000/static/locales/'
    )
    const greeting = await goot()
    return { greeting, translations }
  }

  constructor(props) {
    super(props)

    this.handleLogin = this.handleLogin.bind(this)
    this.i18n = startI18n(props.translations)
  }

  handleLogin(e) {
    e.preventDefault()

    const { email, password, props } = this
    const { loginRequest } = props
    const userData = { email: email.value, password: password.value }

    loginRequest(userData)
      .then(({ data, error }) => {
        if (data) {
          setToken(data.token)
          return Router.push('/profile')
        }

        return Alert.error(error)
      })
      .catch(err => Alert.error(err))
  }

  render() {
    const { greeting } = this.props

    return (
      <I18nextProvider i18n={this.i18n}>
        <Page>
          <div className="login">
            <RegisterSidebar bg="background-login.png">
              <h2 className="login-heading__title">
                League of Legends Rankings.
              </h2>
              <p className="login-heading__description">
                Worldwide Rankings for League of Legends. See who's the best player in your region.
              </p>

              <RegisterFooter />
            </RegisterSidebar>

            <RegisterMain
              title="It’s good to have you back."
              subtitle="Sign in to your account here."
              redirect={
                <UiLink ui="primary small" href="/signup">Sign up</UiLink>
              }
              greeting={greeting}
            >
              <form className="login-form" onSubmit={this.handleLogin}>
                <TextInput
                  type="email"
                  label="Email"
                  placeholder="Email address"
                  inputRef={ref => {
                    this.email = ref
                  }}
                />

                <TextInput
                  type="password"
                  label="Password"
                  placeholder="Your password"
                  inputRef={ref => {
                    this.password = ref
                  }}
                />

                <Link href="/reset-password">
                  <span className="login-form__forgot">
                    Forgot your password?
                  </span>
                </Link>

                <UiButton ui="success block" type="submit">Login</UiButton>
              </form>
            </RegisterMain>

            <Notify />
          </div>

          <style jsx>{`
            .login {
              display: flex;
              min-height: 100vh;
              max-height: 100vh;
            }

            .login-heading__title {
              color: ${colors.white};
              font-size: ${typography.f24};
              margin-bottom: 5px;
              font-weight: 600;
            }

            .login-heading__description {
              color: ${colors.white};
              font-size: ${typography.f14};
              line-height: 26px;
              font-weight: 400;
            }

            .login-form {
              max-width: 500px;
              margin-left: auto;
              margin-right: auto;
              margin-top: 50px;
            }

            .login-form__forgot {
              display: block;
              font-size: ${typography.f14};
              color: ${colors.gray};
              margin-bottom: 50px;
              transition: .15s ease-in-out;
              cursor: pointer;
              display: flex;
              flex-direction: row-reverse;
            }

            .login-form__forgot:hover {
              color: ${colors.grayDark};
            }
          `}</style>
        </Page>
      </I18nextProvider>
    )
  }
}

Login.propTypes = {
  greeting: PropTypes.string.isRequired,
  translations: PropTypes.object
}

const mapStateToProps = state => {
  return {
    login: state.login
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginRequest: userData => dispatch(onLogin(userData))
  }
}

export default withRedux(store, mapStateToProps, mapDispatchToProps)(Login)
