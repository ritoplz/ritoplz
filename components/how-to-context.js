'use strict'

import { translate } from 'react-i18next'
import PropTypes from 'prop-types'
import Link from 'next/link'

import { Row } from './ui'
import { colors, typography } from './ui/theme'

const HowToContext = ({ t }) => (
  <Row>
    <h2>{t('How to confirm your summoner')}</h2>
    <p className="subtitle">
      {t('To enter to our Rankings you have to add and confirm your summoner')}.
    </p>

    <div className="steps">
      <div className="step">
        <h3 className="step-title">
          <span className="step-title__number">#01</span>
          <span className="step-title__text">{t('Add your summoner')}</span>
        </h3>
        <p className="step__description">
          {t('Login to your account and go to')}
          {' '}
          <Link href="/add-summoner"><a>{t('Add Summoner page')}</a></Link>
          {' '}
          {t('to add your summoner')}. {t('We only ask your summoner name')}.
        </p>

        <img src="static/add-summoner.png" alt="Add summoner on Ritoplz" />
      </div>

      <div className="step">
        <h3 className="step-title">
          <span className="step-title__number">#02</span>
          <span className="step-title__text">
            {t('Get your summoner code')}
          </span>
        </h3>
        <p className="step__description">
          {t('After adding your summoner it will show up in your')}
          {' '}
          <Link href="/my-summoners"><a>{t('my summoners page')}</a></Link>
          {' '}
          {t('with a code. Copy that code and go to step 03')}.
        </p>

        <img
          src="static/get-code.png"
          alt="Get summoner code on my summoners"
        />
      </div>

      <div className="step">
        <h3 className="step-title">
          <span className="step-title__number">#03</span>
          <span className="step-title__text">
            {t('Create a Mastery page or Runes page')}
          </span>
        </h3>
        <p className="step__description">
          {t('Open your League of Legends game and create a')}
          {' '}
          <strong>{t('Mastery page')}</strong>
          {' '}
          {t('or a')}
          {' '}
          <strong>{t('Runes page')}</strong>
          {' '}
          {t('and name it with the code received')}.
        </p>

        <img src="static/mastery-page.png" alt="Mastery page and Runes page" />
      </div>

      <div className="step">
        <h3 className="step-title">
          <span className="step-title__number">#04</span>
          <span className="step-title__text">
            {t('Confirm your summoner')}
          </span>
        </h3>
        <p className="step__description">
          {t(
            'After creating your Mastery page or Runes page with the code, go back to your'
          )}
          {' '}
          <Link href="/my-summoners"><a>{t('my summoners')}</a></Link>
          {' '}
          {t('page and click on the confirm button of your summoner')}.
        </p>

        <img
          src="static/confirm-summoner.png"
          alt="Confirm your summoner on Ritoplz"
        />
      </div>
    </div>

    <div className="footnotes">
      <hr className="footnotes__hr" />

      <ul>
        <li className="footnotes__item">
          <span className="footnotes__bullet">1</span>
          <p className="footnotes__description">
            {t('We will')}
            {' '}
            <strong>{t('never')}</strong>
            {' '}
            {t('ask your any League of Legends credentials')}.
            {' '}
            <Link href="/faq"><a>(#link)</a></Link>
          </p>
        </li>

        <li className="footnotes__item">
          <span className="footnotes__bullet">2</span>
          <p className="footnotes__description">
            {t(
              'Understand why do we need to confirm your summoner before adding to our ranking'
            )}
            .
            {' '}
            <Link href="/faq"><a>(#link)</a></Link>
          </p>
        </li>
      </ul>
    </div>

    <style jsx>{`
      h2 {
        text-align: center;
        padding-top: 120px;
        font-size: ${typography.f30};
        color: ${colors.grayDark};
        margin-bottom: 8px;
        font-weight: 600;
      }

      .subtitle {
        text-align: center;
        margin-bottom: 50px;
        font-size: ${typography.f16};
        color: ${colors.gray};
      }

      .steps {
        margin-top: 100px;
        max-width: 75%;
        margin-left: auto;
        margin-right: auto;
      }

      .step {
        margin-bottom: 100px;
      }

      .step-title {
        position: relative;
      }

      .step-title__number {
        font-size: ${typography.f56};
        position: absolute;
        top: -35px;
        left: -45px;
        opacity: .1;
      }

      .step-title__text {
        font-size: ${typography.f26};
        color: ${colors.primary};
        margin-bottom: 10px;
        display: block;
        position: relative;
        z-index: 1;
      }

      .step__description {
        color: ${colors.gray};
        line-height: 1.75rem;
      }

      a {
        color: ${colors.grayDark};
        font-weight: 500;
      }

      .footnotes {
        position: relative;
        padding-top: 50px;
        padding-bottom: 50px;
      }

      .footnotes__hr {
        position: absolute;
        top: 0;
        width: 30px;
        height: 1px;
        background-color: ${colors.grayLight};
        border: none;
        text-align: center;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
      }

      .footnotes__item {
        margin-bottom: 20px;
      }

      .footnotes__bullet {
        background-color: ${colors.danger};
        color: ${colors.white};
        border-radius: 50%;
        height: 18px;
        width: 18px;
        text-align: center;
        line-height: 18px;
        font-size: ${typography.f12};
        font-weight: 500;
        display: inline-block;
      }

      .footnotes__description {
        display: inline-block;
        margin-left: 7px;
        color: ${colors.grayDark};
        line-height: 1;
      }

      a {
        cursor: pointer;
      }

      img {
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 40px;
        display: block;
      }
    `}</style>
  </Row>
)

HowToContext.propTypes = {
  t: PropTypes.func
}

export default translate(['common'])(HowToContext)
