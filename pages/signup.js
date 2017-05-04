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
import { UiButton, UiLink, TextInput } from './../components/ui'
import { colors, typography } from './../components/ui/theme'
import store from './../store/configure-store'
import signupRequest from './../actions/signup'

class Signup extends Component {
  static async getInitialProps() {
    const where = await wer()
    const currentTime = moment().tz(where.time_zone).format('H')
    const greeting = await goot(currentTime)
    return { greeting }
  }

  constructor() {
    super()

    this.handleSignup = this.handleSignup.bind(this)
  }

  handleSignup(e) {
    e.preventDefault()

    const { name, email, password, props } = this
    const { signupRequest } = props
    const data = {
      name: name.value,
      email: email.value,
      password: password.value
    }

    signupRequest(data)
  }

  render() {
    const { greeting } = this.props

    return (
      <Page>
        <div className="signup">
          <RegisterSidebar bg="background-signup.png">
            <h2 className="signup-heading__title">
              League of Legends Rankings.
            </h2>
            <p className="signup-heading__description">
              Usage of the Internet is becoming more common due to rapid advancement of technology.
            </p>
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
    )
  }
}

Signup.propTypes = {
  greeting: PropTypes.string.isRequired
}

const mapDispatchToProps = dispatch => {
  return {
    signupRequest: userData => dispatch(signupRequest(userData))
  }
}

export default withRedux(store, null, mapDispatchToProps)(Signup)
