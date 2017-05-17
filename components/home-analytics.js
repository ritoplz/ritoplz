'use strict'

import { translate } from 'react-i18next'
import PropTypes from 'prop-types'

import { UiLink } from './../components/ui'
import { colors, typography, phone } from './../components/ui/theme'

const Analytics = ({ t }) => (
  <section>
    <div>
      <img src="static/analytics.png" alt="" />
    </div>

    <div>
      <h2>{t('Improve your gaming with data')}</h2>
      <p>
        {t(
          'We provide data for you to understand better your game style and how you are improving'
        )}
        .
      </p>

      <UiLink href="/signup">{t('Learn more')}</UiLink>
    </div>

    <style jsx>{`
      section {
        display: flex;
        padding-bottom: 50px;
        padding-top: 50px;
        flex-wrap: wrap;
      }

      div {
        flex-basis: 50%;
      }

      img {
        margin-left: -62px
      }

      h2 {
        font-size: 3rem;
        color: ${colors.heading};
        padding-top: 75px;
      }

      p {
        font-size: ${typography.f18};
        margin-top: 10px;
        color: ${colors.gray};
        line-height: 2rem;
        margin-bottom: 50px;
      }

      @media ${phone} {
        section {
          flex-direction: column-reverse;
          padding-top: 0;
        }

        h2 {
          padding-top: 0;
        }

        div {
          flex-basis: 100%;
        }

        img {
          margin-left: 0;
          margin-top: 30px;
        }
      }
    `}</style>
  </section>
)

Analytics.propTypes = {
  t: PropTypes.func
}

export default translate(['common'])(Analytics)
