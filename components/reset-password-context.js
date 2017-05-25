'use strict'

import { translate } from 'react-i18next'
import PropTypes from 'prop-types'

import { colors, typography } from './../components/ui/theme'

const ResetPasswordContext = ({ t }) => (
  <div>
    <h2>{t('Reset your password')}</h2>
    <p>
      {t('Forgot your password')}
      ?
      {' '}
      {t('Happens all the time')}
      .
      {' '}
      {t('Enter your email below to reset it')}
      .
    </p>

    <style jsx>{`
      h2 {
        text-align: center;
        padding-top: 120px;
        font-size: ${typography.f30};
        color: ${colors.grayDark};
        margin-bottom: 8px;
        font-weight: 600;
      }

      p {
        text-align: center;
        margin-bottom: 50px;
        font-size: ${typography.f16};
        color: ${colors.gray};
      }
    `}</style>
  </div>
)

ResetPasswordContext.propTypes = {
  t: PropTypes.func
}

export default translate(['common'])(ResetPasswordContext)
