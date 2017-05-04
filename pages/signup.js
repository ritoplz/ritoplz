'use strict'

import { Component } from 'react'
import PropTypes from 'prop-types'
import wer from 'wer'
import moment from 'moment-timezone'
import goot from 'goot'

import RegisterSidebar from './../components/register-sidebar'
import Page from './../layouts/page'
import { UiButton, UiLink, TextInput } from './../components/ui'
import { colors, typography } from './../components/ui/theme'

class Signup extends Component {
  static async getInitialProps() {
    const where = await wer()
    const currentTime = moment().tz(where.time_zone).format('H')
    const greeting = await goot(currentTime)
    return { greeting }
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

          <section className="signup-section">
            <div className="signup-section__signup">
              <UiLink ui="primary small" href="/signup">Login</UiLink>
            </div>

            <h3 className="signup-section__title">
              <strong>Good {greeting}! </strong>
              Welcome to Ritoplz 🎉
            </h3>

            <p className="signup-section__subtitle">
              Create an account and keep playing, let's rank up.
            </p>

            <form className="signup-form">
              <TextInput label="Your name" placeholder="Name" />

              <TextInput
                type="email"
                label="Email"
                placeholder="Email address"
              />

              <TextInput
                type="password"
                label="Password"
                placeholder="Your password"
              />

              <UiButton ui="success block">Create an account</UiButton>
              <p className="warning">
                We will
                {' '}
                <strong>never</strong>
                {' '}
                ask for any League of Legends credentials.
              </p>
            </form>
          </section>
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

          .signup-section {
            flex-basis: calc(100% - 475px);
            padding-top: 125px;
            padding-bottom: 50px;
          }

          .signup-section__signup {
            position: absolute;
            right: 50px;
            top: 30px;
          }

          .signup-section__title {
            text-align: center;
            color: ${colors.heading};
            margin-bottom: 18px;
            font-weight: 400;
            font-size: ${typography.f20};
          }

          .signup-section__subtitle {
            text-align: center;
            color: ${colors.gray};
            font-size: ${typography.f16};
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

export default Signup
