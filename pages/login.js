'use strict'

import { Component } from 'react'
import PropTypes from 'prop-types'
import wer from 'wer'
import moment from 'moment-timezone'
import goot from 'goot'
import withRedux from 'next-redux-wrapper'

import Page from './../layouts/page'
import RegisterSidebar from './../components/register-sidebar'
import RegisterMain from './../components/register-main'
import RegisterFooter from './../components/register-footer'
import { UiButton, UiLink, TextInput } from './../components/ui'
import { colors, typography } from './../components/ui/theme'
import store from './../store/configure-store'
import loginRequest from './../actions/login'
import { setToken } from './../services/auth'

class Login extends Component {
  static async getInitialProps() {
    const where = await wer()
    const currentTime = moment().tz(where.time_zone).format('H')
    const greeting = await goot(currentTime)
    return { greeting }
  }

  constructor() {
    super()

    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin(e) {
    e.preventDefault()

    const { email, password, props } = this
    const { loginRequest, url } = props
    const userData = { email: email.value, password: password.value }

    loginRequest(userData)
      .then(({ data, error }) => {
        if (data) {
          setToken(data.token)
          return url.push('/dashboard')
        }

        return console.log(error)
      })
      .catch(err => console.log(err))
  }

  render() {
    const { greeting } = this.props

    return (
      <Page>
        <div className="login">
          <RegisterSidebar bg="background-login.png">
            <h2 className="login-heading__title">
              League of Legends Rankings.
            </h2>
            <p className="login-heading__description">
              Usage of the Internet is becoming more common due to rapid advancement of technology.
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

              <span className="login-form__forgot">Forgot your password?</span>

              <UiButton ui="success block" type="submit">Login</UiButton>
            </form>
          </RegisterMain>
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
    )
  }
}

Login.propTypes = {
  greeting: PropTypes.string.isRequired
}

const mapStateToProps = state => {
  return {
    login: state.login
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginRequest: userData => dispatch(loginRequest(userData))
  }
}

export default withRedux(store, mapStateToProps, mapDispatchToProps)(Login)
