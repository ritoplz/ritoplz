'use strict'

import { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import PropTypes from 'prop-types'
import { I18nextProvider } from 'react-i18next'

import Page from './../layouts/page'

import Header from './../components/header'
import Hero from './../components/home-hero'
import Road from './../components/home-road'
import Footer from './../components/footer'
import Analytics from './../components/home-analytics'
import { Row } from './../components/ui'
import { phone, tablet } from './../components/ui/theme'

import { startI18n, getTranslation } from './../services/i18n'
import store from './../store/configure-store'

class Home extends Component {
  static async getInitialProps() {
    const translations = await getTranslation('pt', 'common')

    return { translations }
  }

  constructor(props) {
    super(props)

    this.i18n = startI18n(props.translations)
  }

  render() {
    return (
      <I18nextProvider i18n={this.i18n}>
        <Page>
          <Header logged={false} />

          <Row>
            <Hero />
            <img src="static/background.png" alt="" />
            <Road />
            <Analytics />
          </Row>

          <Footer />

          <style jsx>{`
            img {
              position: absolute;
              top: 300px;
              right: 0;
              width: 100%;
            }

            @media ${tablet} {
              img {
                top: 400px;
              }
            }

            @media ${phone} {
              img {
                display: none;
              }
            }
          `}</style>
        </Page>
      </I18nextProvider>
    )
  }
}

Home.propTypes = {
  translations: PropTypes.object
}

export default withRedux(store, null, null)(Home)
