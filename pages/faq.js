'use strict'

import { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import PropTypes from 'prop-types'
import Link from 'next/link'

import Page from './../layouts/page'
import LegalTitle from './../components/legal-title'
import LegalHeading from './../components/legal-heading'
import LegalText from './../components/legal-text'
import Header from './../components/header'
import { Row } from './../components/ui'
import store from './../store/configure-store'
import { isLogged } from './../services/auth'
import fetchAccount from './../actions/fetch-account'
import { colors } from './../components/ui/theme'

class Faq extends Component {
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
          <LegalTitle title="FAQ" date="01/18/2017" />

          <LegalHeading>
            1. Will you support other regions such as NA?
          </LegalHeading>
          <LegalText>
            Surely, we are in the process of adding support for more regions, you can expect to have them to come soon.
          </LegalText>

          <LegalHeading>
            2. Will you support other type of queues and rankings?
          </LegalHeading>

          <LegalText>
            Yes, we are also in the process of adding more types of rankings such as Champion Maestry per region, Best Duo players per region, Victory streak and more, you can expect to have these functionality in the coming months.
          </LegalText>

          <LegalHeading>
            3. I couldn't find my city or state, what should I do?
          </LegalHeading>

          <LegalText>
            We are trying to keep the cities between 1 ~ 7 per state, if we receive too many requests for a city we will be inclined to add it, if you want a city just send us an email to
            {' '}
            <a href="mailto:ritoplzteam@gmail.com">ritoplzteam@gmail.com</a>
            . If you think a state is missing for you region sent us an email too
          </LegalText>

          <LegalHeading>
            4. Can I change my location?
          </LegalHeading>

          <LegalText>
            You are able to change you location anytime you want, just note that you will be part of the rankings of the newest selected region. At the moment we allow users to change their location only three times. Please, contact us if you selected the wrong location.
          </LegalText>

          <LegalHeading>
            5. How can I confirm my summoner?
          </LegalHeading>

          <LegalText>
            We created a dedicated page to help you confirm your summoner, you can find it
            {' '}
            <Link href="/how-to"><a>here</a></Link>
          </LegalText>

          <LegalHeading>
            6. Why do I need to confirm my summoner?
          </LegalHeading>

          <LegalText>
            You need to confirm your summoner so we can make sure that the summoner belongs to you. And the easiest way we found was by creating a Mastery or Runes page on your account with the unique code we provide to each summoner that you add.
          </LegalText>
        </Row>

        <style jsx>{`
          a {
            color: ${colors.primary};
          }
        `}</style>
      </Page>
    )
  }
}

Faq.propTypes = {
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

export default withRedux(store, mapStateToProps, mapDispatchToProps)(Faq)
