'use strict'

import { translate } from 'react-i18next'
import PropTypes from 'prop-types'
import Link from 'next/link'

import { colors, typography, phone } from './ui/theme'
import { isLogged } from './../services/auth'

const ProfileSummoners = ({
  profile,
  currentUser,
  summoners,
  changeSummoner,
  t
}) => {
  const addSummonerBtn = (
    <Link prefetch href="/my-summoners">
      <a>
        {t('Add summoner')} +

        <style jsx>{`
          a {
            text-align: center;
            padding-top: 12px;
            padding-bottom: 12px;
            font-size: ${typography.f14};
            display: block;
            border-top: 1px solid ${colors.border};
            color: ${colors.success};
            opacity: .6;
            transition: .15s ease-in-out;
          }

          a:hover {
            opacity: 1;
          }
        `}</style>
      </a>
    </Link>
  )

  const addSummoner = isLogged() && currentUser.username === profile.username
    ? addSummonerBtn
    : null
  const summoner = summoners.map((summoner, index) => (
    <li key={summoner._id} onClick={() => changeSummoner(index)}>
      <img
        src={`https://avatar.leagueoflegends.com/BR/${summoner.name}.png`}
        alt={summoner.name}
      />
      {summoner.name}

      <style jsx>{`
        img {
          width: 25px;
          height: 25px;
          border-radius: 50%;
          margin-right: 10px;
          vertical-align: middle;
        }

        li {
          font-size: ${typography.f14};
          color: ${colors.gray};
          display: block;
          padding: 10px;
          cursor: pointer;
          transition: .15s ease-in-out;
        }

        li:hover {
          color: ${colors.primary};
        }
      `}</style>
    </li>
  ))

  return (
    <ul>
      {summoner}
      {addSummoner}

      <style jsx>{`
        ul {
          position: absolute;
          padding-top: 5px;
          background-color: ${colors.white};
          box-shadow: 0 2px 10px rgba(0, 0, 0, .1);
          min-width: 200px;
          border-radius: 4px;
          z-index: 10;
          max-height: 300px;
          overflow-y: auto;
        }

        @media ${phone} {
          ul {
            right: 0;
          }
        }
      `}</style>
    </ul>
  )
}

ProfileSummoners.propTypes = {
  profile: PropTypes.object,
  currentUser: PropTypes.object,
  summoners: PropTypes.array,
  changeSummoner: PropTypes.func,
  t: PropTypes.func
}

export default translate(['common'])(ProfileSummoners)
