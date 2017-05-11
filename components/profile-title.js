'use strict'

import PropTypes from 'prop-types'
import Link from 'next/link'
import { UiLink } from './../components/ui'
import { colors, typography } from './../components/ui/theme'

const ProfileTitle = ({ user, location }) => (
  <div className="profile-title">
    <div>
      <h1>{user.name}</h1>
      <Link href="/settings"><span>{location}</span></Link>
    </div>

    <UiLink href="/add-summoner" ui="primary small">Add new summoner</UiLink>

    <style>{`
      .profile-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 50px;
      }

      h1 {
        text-transform: uppercase;
        color: ${colors.primary};
        font-size: ${typography.f16}
      }

      span {
        color: ${colors.gray};
        font-size: ${typography.f14}
        font-weight: 500;
        margin-top: 5px;
        display: block;
        cursor: pointer;
      }
    `}</style>
  </div>
)

ProfileTitle.propTypes = {
  user: PropTypes.object,
  location: PropTypes.string
}

export default ProfileTitle
