'use strict'

import { translate } from 'react-i18next'
import PropTypes from 'prop-types'

import { colors, typography } from './ui/theme'
import { TwitterIcon } from './icons'

const AboutContext = ({ t }) => (
  <div>
    <section>
      <h1>{t('About')} Ritoplz</h1>
      <h2>{t('Our Mission')}</h2>
      <p>
        {t(
          'We believe that we are changing the gaming experience by bringing more competitiveness inside League of Legends and by providing data to players to understand better about their gaming'
        )}
        .
      </p>
    </section>

    <section>
      <h1>{t('Team')}</h1>
      <h2>{t('Core team')}</h2>

      <div className="team">
        <div>
          <h3>Bu Kinoshita</h3>
          <h4>
            Founder
            <span>Front-end Engineer & UX Designer</span>
          </h4>

          <a href="https://twitter.com/bukinoshita">
            <TwitterIcon />
          </a>
        </div>

        <div>
          <h3>Carlos Derich</h3>
          <h4>
            Founder
            <span>Backend Engineer & Infra</span>
          </h4>

          <a href="https://twitter.com/carlosderich">
            <TwitterIcon />
          </a>
        </div>
      </div>
    </section>

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
  </div>
)

AboutContext.propTypes = {
  t: PropTypes.func
}

export default translate(['common'])(AboutContext)
