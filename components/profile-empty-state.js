'use strict'

import { translate } from 'react-i18next'
import PropTypes from 'prop-types'

import { UiLink } from './ui'
import { colors, typography } from './ui/theme'

const ProfileEmptyState = ({ profile, isUser, t }) => {
  let emptyState

  if (isUser) {
    emptyState = (
      <div>
        <h2>{t(`You don't have any summoners yet`)}</h2>

        <UiLink href="/add-summoner">{t('Add summoner')}</UiLink>

        <style jsx>{`
          div {
            text-align: center;
          }

          h2 {
            color: ${colors.grayDark};
            font-weight: 400;
            text-align: center;
            margin-top: 50px;
            font-size: ${typography.f18};
            margin-bottom: 30px;
          }
        `}</style>
      </div>
    )
  } else {
    emptyState = (
      <h2>
        {profile.name} {t('does not have any summoners yet')}. 😢

        <style jsx>{`
          h2 {
            color: ${colors.grayDark};
            font-weight: 400;
            text-align: center;
            margin-top: 50px;
            font-size: ${typography.f18};
          }
        `}</style>
      </h2>
    )
  }

  return (
    <div>
      {emptyState}
    </div>
  )
}

ProfileEmptyState.propTypes = {
  isUser: PropTypes.bool,
  profile: PropTypes.object,
  t: PropTypes.func
}

export default translate(['common'])(ProfileEmptyState)
