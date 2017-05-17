'use strict'

import { translate } from 'react-i18next'
import PropTypes from 'prop-types'

import { UiLink } from './../components/ui'
import { colors, typography, phone } from './../components/ui/theme'

const Road = ({ t }) => (
  <section>
    <div>
      <h2>{t('Road to the top')}</h2>
      <p>{t(`See who's the best of your region and compete against`)}.</p>

      <UiLink href="/rankings">{t('See your Ranking')}</UiLink>
    </div>

    <div>
      <img src="static/ranking.png" alt="" />
    </div>

    <style jsx>{`
      section {
        display: flex;
        padding-bottom: 50px;
        flex-wrap: wrap;
      }

      div {
        flex-basis: 50%;
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
        div {
          flex-basis: 100%;
        }

        div + div {
          margin-top: 60px;
        }
      }
    `}</style>
  </section>
)

Road.propTypes = {
  t: PropTypes.func
}

export default translate(['common'])(Road)
