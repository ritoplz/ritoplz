'use strict'

import { translate } from 'react-i18next'
import PropTypes from 'prop-types'
import { Link } from 'next-url-prettifier'

import { colors, typography } from './ui/theme'
import RankingProgress from './ranking-progress'
import Router from './../services/routes'

const RankingUser = ({ user, position, currentUser, t }) => {
  let lastTimePlayed
  const hotStreak = user.rankedSolo.isHotStreak ? '🔥' : null

  if (user.recentMatches.lastPlayedSolo) {
    lastTimePlayed = user.recentMatches.lastPlayedSolo.date
  } else {
    lastTimePlayed = ''
  }

  const currentUserId = currentUser._id
  const userId = user.userId
  const userStyle = currentUserId === userId
    ? 'ranking ranking--user'
    : 'ranking'

  return (
    <div className={userStyle}>
      <header className="ranking-header">
        <img
          className="ranking-header__avatar"
          src={`https://ddragon.leagueoflegends.com/cdn/7.9.1/img/profileicon/${user.profileIconId}.png`}
          alt={user.username}
        />

        <div className="ranking-user">
          <h3 className="ranking-user__summoner">
            {user.name} {hotStreak}
          </h3>
          <h4 className="ranking-user__username">{user.username}</h4>
        </div>

        <Link route={Router.linkPage('profile', { username: user.userSlug })}>
          <a>View Profile</a>
        </Link>
      </header>

      <footer className="ranking-footer">
        <span className="ranking-footer__position">#{position}</span>

        <RankingProgress ranking={user.rankedSolo} />

        <div className="ranking-info">
          <span className="ranking-info__location">
            {user.city}, {user.state} — {user.country}
          </span>
          <span className="ranking-info__play">
            {t('Last time played')}:
            {' '}
            <strong>{lastTimePlayed}</strong>
          </span>
        </div>
      </footer>

      <style jsx>{`
        .ranking {
          width: 100%;
          background-color: ${colors.white};
          border-radius: 5px;
          box-shadow: 0 1px 6px rgba(0, 0, 0, .1);
          padding-left: 15px;
          padding-right: 15px;
          margin-bottom: 30px;
          border: 1px solid transparent;
        }

        .ranking--user {
          border-color: ${colors.primary};
        }

        .ranking-header {
          display: flex;
          padding-top: 15px;
          padding-bottom: 15px;
          border-bottom: 1px solid ${colors.border};
          align-items: center;
        }

        .ranking-header__avatar {
          width: 45px;
          height: 45px;
          border-radius: 3px;
          flex-basis: 45px;
          margin-right: 15px;
        }

        .ranking-user {
          flex-basis: 100%;
        }

        .ranking-user__summoner {
          display: block;
          font-weight: 600;
          color: ${colors.heading};
          font-size: ${typography.f18};
          margin-bottom: 2px;
        }

        .ranking-user__username {
          color: ${colors.gray};
          display: block;
          font-weight: 500;
          font-size: ${typography.f12};
        }

        .ranking-footer {
          display: flex;
          padding-top: 10px;
          padding-bottom: 10px;
          align-items: center;
        }

        .ranking-footer__position {
          color: ${colors.heading};
          font-size: ${typography.f16};
          font-weight: 700;
          flex-basis: 45px;
          margin-right: 15px;
        }

        .ranking-info {
          text-align: right;
          flex-basis: 50%;
        }

        .ranking-info__location {
          display: block;
          color: #AAA;
          font-size: ${typography.f12};
          font-weight: 500;
          margin-bottom: 3px;
        }

        .ranking-info__play {
          display: block;
          color: #AAA;
          font-size: ${typography.f12};
          font-weight: 500;
        }

        a {
          display: inline-block;
          font-weight: 500;
          line-height: 1.25;
          text-align: center;
          white-space: nowrap;
          vertical-align: middle;
          user-select: none;
          border: 1px solid #DADADA;
          border-radius: 4px;
          transition: all .2s ease-in-out;
          cursor: pointer;
          background-color: transparent;
          color: #CCCCCC;
          font-size: ${typography.f14};
          padding: 12px 15px;
        }
      `}</style>
    </div>
  )
}

RankingUser.propTypes = {
  user: PropTypes.object,
  position: PropTypes.number,
  currentUser: PropTypes.object,
  t: PropTypes.func
}

export default translate(['common'])(RankingUser)
