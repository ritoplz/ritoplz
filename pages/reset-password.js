'use strict'

import { Component } from 'react'
import withRedux from 'next-redux-wrapper'

import { isLogged } from './../services/auth'
import Page from './../layouts/page'
import { UiButton, TextInput, Row } from './../components/ui'
import { colors, typography } from './../components/ui/theme'
import store from './../store/configure-store'
import Header from './../components/header'

class ResetPassword extends Component {
  render() {
    return (
      <Page>
        <Header logged={isLogged()} />
        <Row>
          <h2>Reset your password</h2>
          <p>
            Forgot your password? Happens all the time. Enter your email below to reset it.
          </p>

          <form>
            <TextInput
              label="Email"
              placeholder="ritoplz@gmail.com"
              type="email"
              inputRef={ref => {
                this.email = ref
              }}
            />

            <UiButton ui="primary block" type="submit">Reset password</UiButton>
          </form>
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
        `}</style>
      </Page>
    )
  }
}

export default withRedux(store, null, null)(ResetPassword)
