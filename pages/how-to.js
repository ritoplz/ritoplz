'use strict'

import { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import PropTypes from 'prop-types'
import Router from 'next/router'
import Link from 'next/link'

import Page from './../layouts/page'

import { Row } from './../components/ui'
import { colors, typography } from './../components/ui/theme'
import Header from './../components/header'

import { isLogged } from './../services/auth'
import store from './../store/configure-store'
import { fetchAccount } from './../actions/fetch-account'

class HowTo extends Component {
  componentDidMount() {
    const { fetchAccount } = this.props

    if (isLogged()) {
      return fetchAccount().then(res => {
        if (res.error) {
          Router.push('/profile')
        }
      })
    }
  }

  render() {
    return (
      <Page>
        <Header logged={isLogged()} user={this.props.user} />
        <Row>
          <h2>How to confirm your summoner</h2>
          <p className="subtitle">
            To enter to our Rankings you have to add and confirm your summoner.
          </p>

          <div className="steps">
            <div className="step">
              <h3 className="step-title">
                <span className="step-title__number">#01</span>
                <span className="step-title__text">Add your summoner</span>
              </h3>
              <p className="step__description">
                Login to your account and go to
                {' '}
                <Link href="/add-summoner"><a>Add Summoner page</a></Link>
                {' '}
                to add your summoner. We only ask your summoner name.
              </p>
            </div>

            <div className="step">
              <h3 className="step-title">
                <span className="step-title__number">#02</span>
                <span className="step-title__text">Get your summoner code</span>
              </h3>
              <p className="step__description">
                After adding your summoner it will show up on your
                {' '}
                <Link href="/profile"><a>profile page</a></Link>
                {' '}
                with a code. Copy that code and go to step 03.
              </p>
            </div>

            <div className="step">
              <h3 className="step-title">
                <span className="step-title__number">#03</span>
                <span className="step-title__text">
                  Create a Mastery page or Runes page
                </span>
              </h3>
              <p className="step__description">
                Open your League of Legends game and create a
                {' '}
                <strong>Mastery page</strong>
                {' '}
                or a
                {' '}
                <strong>Runes page</strong>
                {' '}
                and name it with the code received.
              </p>
            </div>

            <div className="step">
              <h3 className="step-title">
                <span className="step-title__number">#04</span>
                <span className="step-title__text">Confirm your summoner</span>
              </h3>
              <p className="step__description">
                After creating your Mastery page or Runes page with the code, go back to your
                {' '}
                <Link href="/profile"><a>profile</a></Link>
                {' '}
                and click on the confirm button of your summoner.
              </p>
            </div>
          </div>

          <div className="footnotes">
            <hr className="footnotes__hr" />

            <ul>
              <li className="footnotes__item">
                <span className="footnotes__bullet">1</span>
                <p className="footnotes__description">
                  We will
                  {' '}
                  <strong>never</strong>
                  {' '}
                  ask your any League of Legends credentials.
                  {' '}
                  <Link href="/faq"><a>(#link)</a></Link>
                </p>
              </li>

              <li className="footnotes__item">
                <span className="footnotes__bullet">2</span>
                <p className="footnotes__description">
                  Understand why do we need to confirm your summoner before adding to our ranking.
                  {' '}
                  <Link href="/faq"><a>(#link)</a></Link>
                </p>
              </li>
            </ul>
          </div>
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

          .subtitle {
            text-align: center;
            margin-bottom: 50px;
            font-size: ${typography.f16};
            color: ${colors.gray};
          }

          .steps {
            margin-top: 100px;
            max-width: 75%;
            margin-left: auto;
            margin-right: auto;
          }

          .step {
            margin-bottom: 100px;
          }

          .step-title {
            position: relative;
          }

          .step-title__number {
            font-size: ${typography.f56};
            position: absolute;
            top: -35px;
            left: -45px;
            opacity: .1;
          }

          .step-title__text {
            font-size: ${typography.f26};
            color: ${colors.primary};
            margin-bottom: 10px;
            display: block;
            position: relative;
            z-index: 1;
          }

          .step__description {
            color: ${colors.gray};
            line-height: 1.75rem;
          }

          a {
            color: ${colors.grayDark};
            font-weight: 500;
          }

          .footnotes {
            position: relative;
            padding-top: 50px;
            padding-bottom: 50px;
          }

          .footnotes__hr {
            position: absolute;
            top: 0;
            width: 30px;
            height: 1px;
            background-color: ${colors.grayLight};
            border: none;
            text-align: center;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
          }

          .footnotes__item {
            margin-bottom: 20px;
          }

          .footnotes__bullet {
            background-color: ${colors.danger};
            color: ${colors.white};
            border-radius: 50%;
            height: 18px;
            width: 18px;
            text-align: center;
            line-height: 18px;
            font-size: ${typography.f12};
            font-weight: 500;
            display: inline-block;
          }

          .footnotes__description {
            display: inline-block;
            margin-left: 7px;
            color: ${colors.grayDark};
            line-height: 1;
          }

          a {
            cursor: pointer;
          }
        `}</style>
      </Page>
    )
  }
}

HowTo.propTypes = {
  fetchAccount: PropTypes.func.isRequired,
  user: PropTypes.object
}

const mapStateToProps = state => {
  return {
    user: state.account.data.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAccount: () => dispatch(fetchAccount())
  }
}

export default withRedux(store, mapStateToProps, mapDispatchToProps)(HowTo)
