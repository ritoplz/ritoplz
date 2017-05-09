'use strict'

import { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Router from 'next/router'

import Page from './../layouts/page'
import Header from './../components/header'
import { UiButton, TextInput, Row } from './../components/ui'
import { colors, typography } from './../components/ui/theme'
import store from './../store/configure-store'
import { isLogged } from './../services/auth'
import editUser from './../actions/edit-user'

class SudoMode extends Component {
  constructor() {
    super()
    this.handleSudoMode = this.handleSudoMode.bind(this)
  }

  componentDidMount() {
    const { query } = this.props.url

    if (!query.hasOwnProperty('newEmail')) {
      if (isLogged()) {
        return Router.push('/profile')
      }

      return Router.push('/login')
    }
  }

  handleSudoMode(e) {
    e.preventDefault()

    const { editUser, url } = this.props

    if (url.query.hasOwnProperty('newEmail')) {
      const { name, newEmail } = url.query
      const password = this.password.value
      const data = { name, newEmail, password }

      editUser(data).then(() => Router.push('/profile'))
    }
  }

  render() {
    return (
      <Page>
        <Header logged={isLogged()} />
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
          `}</style>
        </Row>
      </Page>
    )
  }
}

SudoMode.propTypes = {
  editUser: PropTypes.func.isRequired,
  url: {
    query: PropTypes.object
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editUser: userData => dispatch(editUser(userData))
  }
}

export default withRedux(store, null, mapDispatchToProps)(SudoMode)
