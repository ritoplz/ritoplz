'use strict'

import { Component } from 'react'
import withRedux from 'next-redux-wrapper'

import Page from './../layouts/page'

import Header from './../components/header'
import Hero from './../components/home-hero'
import Road from './../components/home-road'
import Footer from './../components/footer'
import Analytics from './../components/home-analytics'
import { Row } from './../components/ui'
import { phone, tablet } from './../components/ui/theme'

import store from './../store/configure-store'

class Home extends Component {
  render() {
    return (
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
    )
  }
}

export default withRedux(store, null, null)(Home)
