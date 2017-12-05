'use strict'

import React from 'react'
import { FormattedMessage } from 'react-intl'

import Page from './../layouts/page'

import Logo from './../components/logo'
import pageWithIntl from './../components/page-with-intl'

import { colors, typography, phone } from './../theme'

export default pageWithIntl(() => (
  <Page>
    <section>
      <div>
        <Logo />
        <h2>
          <FormattedMessage
            id="description"
            defaultMessage="Worldwide Rankings for League of Legends. See who's the best player in your region."
          />
        </h2>

        <p>
          <FormattedMessage id="soon" defaultMessage="coming soon" />
        </p>
      </div>

      <style jsx>{`
        section {
          display: flex;
          align-items: center;
          min-height: 100vh;
          text-align: center;
          width: 100%;
          background: ${colors.primary};
          background: -moz-linear-gradient(
            left,
            ${colors.primary} 1%,
            ${colors.secondary} 100%
          );
          background: -webkit-linear-gradient(
            left,
            ${colors.primary} 1%,
            ${colors.secondary} 100%
          );
          background: linear-gradient(
            to right,
            ${colors.primary} 1%,
            ${colors.secondary} 100%
          );
        }

        div {
          max-width: 550px;
          margin-left: auto;
          margin-right: auto;
        }

        h2 {
          color: ${colors.white};
          font-weight: ${typography.light};
          font-size: ${typography.f26};
          line-height: 40px;
          margin-top: 30px;
        }

        p {
          color: ${colors.white};
          margin-top: 50px;
        }

        @media ${phone} {
          h2 {
            font-size: ${typography.f20};
            line-height: 30px;
          }
        }
      `}</style>
    </section>
  </Page>
))
