'use strict'

import React from 'react'

import Page from './../layouts/page'

import { colors, typography } from './../theme'

const Home = () => (
  <Page>
    <section>
      <div>
        <h1>Ritoplz v3</h1>
        <h2>coming soon</h2>

        <a href="https://github.com/ritoplz/ritoplz">github</a>
      </div>

      <style jsx>{`
        section {
          min-height: 100vh;
          max-height: 100vh;
          height: 100%;
          width: 100%;
          background-color: ${colors.primary};
          display: flex;
          align-items: center;
        }

        div {
          width: 100%;
          text-align: center;
        }

        h1 {
          font-weight: ${typography.regular};
          color: ${colors.white};
        }

        h2 {
          font-weight: ${typography.thin};
          color: ${colors.white};
        }

        a {
          color: ${colors.white};
          margin-top: 30px;
          display: block;
          transition: all 0.2s;
          opacity: 0.75;
        }

        a:hover {
          opacity: 1;
        }
      `}</style>
    </section>
  </Page>
)

export default Home
