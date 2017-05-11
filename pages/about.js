'use strict'

import { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import PropTypes from 'prop-types'

import Page from './../layouts/page'
import Header from './../components/header'
import { Row } from './../components/ui'
import store from './../store/configure-store'
import { isLogged } from './../services/auth'
import fetchAccount from './../actions/fetch-account'
import { colors, typography } from './../components/ui/theme'

class About extends Component {
  componentDidMount() {
    const { fetchAccount } = this.props

    if (isLogged()) {
      fetchAccount()
    }
  }

  render() {
    return (
      <Page>
        <Header logged={isLogged()} user={this.props.user} />

        <Row>
          <h1>About Ritoplz</h1>

          <section>
            <h2>Our Mission</h2>
            <p>
              We believe that we are changing the gaming experience by bringing more competitiveness inside League of Legends and by providing data to players to understand better about their gaming.
            </p>
          </section>
        </Row>

        <section className="jobs">
          <Row>
            <h2>Jobs</h2>
            <p>Help us rank up</p>

            <ul>
              <li>
                <h3>Backend Engineer</h3>
                <h4>Remote</h4>
              </li>

              <li>
                <h3>ML Engineer</h3>
                <h4>Remote</h4>
              </li>

              <li>
                <h3>Sales</h3>
                <h4>Remote</h4>
              </li>
            </ul>

            <p>
              PERKS: Health, Dental, And Vision Coverage; 401(k) Plan;  Open Vacation Policy; Apple Equipment; Flexible Work Hours
            </p>
          </Row>
        </section>

        <Row>
          <section>
            <h2>Press</h2>
            <p>News, company info, and media resources.</p>

            <div className="press">
              <div className="press-logo">
                <img src="static/press-logo.png" alt="Ritoplz logo" />
              </div>
              <div className="press-logo">
                <img src="static/press-logo-white.png" alt="Ritoplz logo" />
              </div>
            </div>
          </section>
        </Row>

        <style jsx>{`
          h1 {
            text-align: center;
            margin-top: 100px;
            font-weight: 400;
            font-size: ${typography.f56};
            color: ${colors.heading};
          }

          h2 {
            font-size: ${typography.f14};
            color: ${colors.grayDark};
            font-weight: 500;
            margin-top: 100px;
            margin-bottom: 25px;
            text-transform: uppercase;
            text-align: center;
          }

          p {
            text-align: center;
            font-size: ${typography.f20};
            line-height: 2rem;
            color: ${colors.gray};
          }

          .jobs {
            background-color: #F5F5F7;
            padding-top: 35px;
            padding-bottom: 100px;
            margin-top: 100px;
            margin-bottom: 50px;
          }

          ul {
            display: flex;
            margin-top: 50px;
            margin-bottom: 70px;
            justify-content: space-between;
          }

          li {
            box-shadow: 0 20px 60px -10px rgba(0,0,0,.2);
            flex-basis: calc(33.33% - 15px);
            background: white;
            padding: 50px 20px;
            border-radius: 8px;
            margin-bottom: 20px;
            text-align: center;
          }

          h3 {
            font-size: ${typography.f20};
            color: ${colors.grayDark};
            font-weight: 400;
          }

          h4 {
            font-size: ${typography.f14};
            color: ${colors.gray};
            font-weight: 400;
            margin-top: 5px;
          }

          .press {
            display: flex;
            justify-content: space-between;
            margin-top: 50px;
            margin-bottom: 50px;
          }

          .press-logo {
            flex-basis: calc(50% - 20px);
          }
        `}</style>
      </Page>
    )
  }
}

About.propTypes = {
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

export default withRedux(store, mapStateToProps, mapDispatchToProps)(About)
