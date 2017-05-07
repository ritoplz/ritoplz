'use strict'

import PropTypes from 'prop-types'
import { colors, typography } from './ui/theme'
import { isLogged } from './../services/auth'

const RankingHeading = ({ user }) => {
  console.log(user)
  let rankingHeading
  if (isLogged() && user) {
    rankingHeading = (
      <h2>
        <strong className="username">{user.name}</strong>
        , you are in
        {' '}
        <strong>45th</strong>
        {' '}
        in
        {' '}
        <strong>São Paulo, São Paulo — BR</strong>

        <style jsx>{`
          h2 {
            font-weight: 300;
            font-size: ${typography.f56};
            color: ${colors.heading};
            padding-top: 100px;
            padding-bottom: 50px;
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

  return (
    <div>
      {rankingHeading}
    </div>
  )
}

RankingHeading.propTypes = {
  user: PropTypes.object
}

export default RankingHeading
