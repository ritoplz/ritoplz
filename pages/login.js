'use strict'

import Link from 'next/link'
import Page from './../layouts/page'
import { UiButton, UiLink, TextInput } from './../components/ui'
import { colors, typography } from './../components/ui/theme'
import Logo from './../components/logo'

const Settings = () => {
  return (
    <Page>
      <div className="login">
        <aside className="login-sidebar">
          <Link prefetch href="/">
            <a className="login-sidebar__logo">
              <Logo type="white" size="80px" />
            </a>
          </Link>

          <div className="login-heading">
            <h2 className="login-heading__title">
              League of Legends Rankings.
            </h2>
            <p className="login-heading__description">
              Usage of the Internet is becoming more common due to rapid advancement of technology.
            </p>
          </div>
        </aside>

        <section className="login-section">
          <div className="login-section__signup">
            <UiLink ui="primary small" href="/signup">Sign up</UiLink>
          </div>

          <h3 className="login-section__title">
            <strong>Good night! </strong>
            It’s good to have you back.
          </h3>

          <p className="login-section__subtitle">
            Sign in to your account here.
          </p>

          <form className="login-form">
            <TextInput type="email" label="Email" placeholder="Email address" />

            <TextInput
              type="password"
              label="Password"
              placeholder="Your password"
            />

            <span className="login-form__forgot">Forgot your password?</span>

            <UiButton ui="success block">Login</UiButton>
          </form>
        </section>
      </div>

      <style jsx>{`
        .login {
          display: flex;
          min-height: 100vh;
        }

        .login-sidebar {
          flex-basis: 475px;
          background-color: red;
          display: flex;
          flex-direction: column-reverse;
          padding: 50px;
          background: url('static/background-login.png') center center;
          background-size: cover;
        }

        .login-sidebar__logo {
          position: absolute;
          top: 50px;
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

        .login-section {
          flex-basis: calc(100% - 475px);
          padding-top: 150px;
          padding-bottom: 50px;
        }

        .login-section__signup {
          position: absolute;
          right: 50px;
          top: 30px;
        }

        .login-section__title {
          text-align: center;
          color: ${colors.heading};
          margin-bottom: 18px;
          font-weight: 400;
          font-size: ${typography.f20};
        }

        .login-section__subtitle {
          text-align: center;
          color: ${colors.gray};
          font-size: ${typography.f16};
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

export default Settings
