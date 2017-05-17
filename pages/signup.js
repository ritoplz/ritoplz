'use strict'

import { Component } from 'react'
import PropTypes from 'prop-types'
import goot from 'goot'
import withRedux from 'next-redux-wrapper'
import Router from 'next/router'
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
import { onSignup } from './../actions/signup'

class Signup extends Component {
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

    this.handleSignup = this.handleSignup.bind(this)
    this.i18n = startI18n(props.translations)
  }

  handleSignup(e) {
    e.preventDefault()

    const { name, email, password, props } = this
    const { signupRequest } = props
    const userData = {
      name: name.value,
      email: email.value,
      password: password.value
    }

    signupRequest(userData)
      .then(({ data, error }) => {
        if (data) {
          setToken(data.token)
          return Router.push('/my-summoners')
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
          <div className="signup">
            <RegisterSidebar bg="background-signup.png">
              <h2 className="signup-heading__title">
                League of Legends Rankings.
              </h2>
              <p className="signup-heading__description">
                Join the Worldwide Rankings for League of Legends. See who's the best player in your region.
              </p>

              <RegisterFooter />
            </RegisterSidebar>

            <RegisterMain
              title="Welcome to Ritoplz 🎉"
              subtitle="Create an account and keep playing, let's rank up."
              redirect={<UiLink ui="primary small" href="/login">Login</UiLink>}
              greeting={greeting}
            >
              <form className="signup-form" onSubmit={this.handleSignup}>
                <TextInput
                  label="Your name"
                  placeholder="Name"
                  inputRef={ref => {
                    this.name = ref
                  }}
                />

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

                <UiButton ui="success block" type="submit">
                  Create an account
                </UiButton>

                <p className="warning">
                  We will
                  {' '}
                  <strong>never</strong>
                  {' '}
                  ask for any League of Legends credentials.
                </p>
              </form>
            </RegisterMain>

            <Notify />
          </div>

          <style jsx>{`
            .signup {
              display: flex;
              min-height: 100vh;
              max-height: 100vh;
            }

            .signup-heading__title {
              color: ${colors.white};
              font-size: ${typography.f24};
              margin-bottom: 5px;
              font-weight: 600;
            }

            .signup-heading__description {
              color: ${colors.white};
              font-size: ${typography.f14};
              line-height: 26px;
              font-weight: 400;
            }

            .signup-form {
              max-width: 500px;
              margin-left: auto;
              margin-right: auto;
              margin-top: 50px;
            }

            .signup-form__forgot {
              display: block;
              font-size: ${typography.f14};
              color: ${colors.gray};
              margin-bottom: 50px;
              transition: .15s ease-in-out;
              cursor: pointer;
              display: flex;
              flex-direction: row-reverse;
            }

            .signup-form__forgot:hover {
              color: ${colors.grayDark};
            }

            .warning {
              font-size: ${typography.f14};
              margin-top: 15px;
              text-align: center;
              color: ${colors.gray};
            }
          `}</style>
        </Page>
      </I18nextProvider>
    )
  }
}

Signup.propTypes = {
  greeting: PropTypes.string.isRequired,
  translations: PropTypes.object
}

const mapDispatchToProps = dispatch => {
  return {
    signupRequest: userData => dispatch(onSignup(userData))
  }
}

export default withRedux(store, null, mapDispatchToProps)(Signup)
