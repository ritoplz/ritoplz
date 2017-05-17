'use strict'

import { translate } from 'react-i18next'

import { UiLink } from './/ui'
import { colors, typography, phone, tablet } from './ui/theme'

const Hero = ({ t }) => (
  <section>
    <h1>Ritoplz <span>Rankings</span></h1>
    <h2>
      {t(`Worldwide Rankings for League of Legends`)}. {t(`See who's the best player in your region`)}.
    </h2>

    <UiLink href="/signup">{t('Create an account')}</UiLink>
    <UiLink href="/rankings" ui="link">{t('See Rankings')}</UiLink>

    <style jsx>{`
      section {
        padding-top: 75px;
        padding-bottom: 400px;
        position: relative;
        z-index: 1;
      }

      h1 {
        font-size: 75px;
        color: ${colors.primary};
        font-weight: 700;
      }

      span {
        color: ${colors.heading};
        display: block;
      }

      h2 {
        color: ${colors.gray};
        font-size: ${typography.f16};
        font-weight: 500;
        margin-top: 20px;
        margin-bottom: 50px;
        max-width: 330px;
        line-height: 2rem;
      }

      @media ${tablet} {
        section {
          padding-bottom: 200px;
        }
      }

      @media ${phone} {
        section {
          padding-bottom: 0;
        }
      }
    `}</style>
  </section>
)

export default translate(['common'])(Hero)
