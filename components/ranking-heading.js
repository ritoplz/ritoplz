'use strict'

import { translate } from 'react-i18next'
import PropTypes from 'prop-types'

import { colors, typography } from './ui/theme'
import { isLogged } from './../services/auth'

const RankingHeading = ({ user, t }) => {
  let rankingHeading
  if (isLogged() && user) {
    if (user.country && user.state && user.city) {
      rankingHeading = (
        <h2>
          <strong className="username">{user.name}</strong>
          , {t('you are in')}
          {' '}
          <strong>{user.city}, {user.state} — {user.country}</strong>

          <style jsx>{`
            h2 {
              font-weight: 300;
              font-size: ${typography.f56};
              color: ${colors.heading};
              padding-top: 100px;
            }

            strong {
              font-weight: 400;
            }

            .username {
              color: ${colors.primary};
              font-weight: 600;
            }
          `}</style>
        </h2>
      )
    }
  }

  return (
    <div>
      {rankingHeading}
    </div>
  )
}

RankingHeading.propTypes = {
  user: PropTypes.object,
  t: PropTypes.func
}

export default translate(['common'])(RankingHeading)
