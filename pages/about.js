'use strict'

import { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import PropTypes from 'prop-types'

import Page from './../layouts/page'

import Header from './../components/header'
import Footer from './../components/footer'
import { Row } from './../components/ui'
import { colors, typography } from './../components/ui/theme'

import { isLogged } from './../services/auth'
import { TwitterIcon } from './../components/icons'
import store from './../store/configure-store'
import { fetchAccount } from './../actions/fetch-account'

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
          <section>
            <h1>About Ritoplz</h1>
            <h2>Our Mission</h2>
            <p>
              We believe that we are changing the gaming experience by bringing more competitiveness inside League of Legends and by providing data to players to understand better about their gaming.
            </p>
          </section>

          <section>
            <h1>Team</h1>
            <h2>Core team</h2>

            <div className="team">
              <div>
                <h3>Bu Kinoshita</h3>
                <h4>
                  Founder
                  <span>Front-end Engineer & UX Designer</span>
                </h4>

                <a href="https://twitter.com/bukinoshita">
                  <TwitterIcon color="#1da1f2" />
                </a>
              </div>

              <div>
                <h3>Carlos Derich</h3>
                <h4>
                  Founder
                  <span>Backend Engineer & Infra</span>
                </h4>

                <a href="https://twitter.com/carlosderich">
                  <TwitterIcon color="#1da1f2" />
                </a>
              </div>
            </div>
          </section>
        </Row>

        <Footer />

        <style jsx>{`
          section {
            padding-top: 100px;
            padding-bottom: 100px;
          }

          h1 {
            text-align: center;
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

          .team {
            display: flex;
            margin-top: 100px;
          }

          .team div {
            flex-basis: 50%;
            text-align: center;
          }

          h3 {
            color: ${colors.grayDark};
            font-weight: 500;
            font-size: ${typography.f20};
          }

          h4 {
            color: ${colors.gray};
            font-weight: 400;
            margin-top: 10px;
            margin-bottom: 20px;
          }

          span {
            display: block;
            margin-top: 5px;
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
