'use strict'

import { translate } from 'react-i18next'
import PropTypes from 'prop-types'

import ProfileSummoner from './profile-summoner'
import ProfileEmptyState from './profile-empty-state'
import { isLogged } from './../services/auth'

const ProfileData = ({ profile, currentUser, index, champions }) => {
  let summoners

  if (profile.summoners.length > 0) {
    summoners = (
      <ProfileSummoner
        summoners={profile.summoners}
        index={index}
        champions={champions}
      />
    )
  } else {
    summoners = isLogged() && profile.username === currentUser.username
      ? <ProfileEmptyState isUser={true} profile={profile} />
      : <ProfileEmptyState profile={profile} isUser={false} />
  }

  return <div>{summoners}</div>
}

ProfileData.propTypes = {
  currentUser: PropTypes.object,
  profile: PropTypes.object,
  index: PropTypes.number,
  champions: PropTypes.object
}

export default translate(['common'])(ProfileData)
