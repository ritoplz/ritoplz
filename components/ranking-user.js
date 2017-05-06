'use strict'

import PropTypes from 'prop-types'
import { colors, typography } from './../components/ui/theme'
import { UiButton } from './../components/ui'
import RankingProgress from './ranking-progress'

const RankingUser = ({ user, position }) => {
  let lastTimePlayed
  const hotStreak = user.rankedSolo.isHotStreak ? '🔥' : null

  if (user.recentMatches.lastPlayedSolo) {
    lastTimePlayed = user.recentMatches.lastPlayedSolo.date
  } else {
    lastTimePlayed = ''
  }

  return (
    <div className="ranking">
      <header className="ranking-header">
        <img
          className="ranking-header__avatar"
          src={`https://ddragon.leagueoflegends.com/cdn/7.9.1/img/profileicon/${user.profileIconId}.png`}
          alt={user.username}
        />

        <div className="ranking-user">
          <h3 className="ranking-user__summoner">
            {user.username} {hotStreak}
          </h3>
          <h4 className="ranking-user__username">{user.name}</h4>
        </div>

        <UiButton ui="outline default small">View Profile</UiButton>
      </header>

      <footer className="ranking-footer">
        <span className="ranking-footer__position">#{position}</span>

        <RankingProgress ranking={user.rankedSolo} />

        <div className="ranking-info">
          <span className="ranking-info__location">
            {user.city}, {user.state} — {user.country}
          </span>
          <span className="ranking-info__play">
            Last time played:
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
      `}</style>
    </div>
  )
}

RankingUser.propTypes = {
  user: PropTypes.object,
  position: PropTypes.number
}

export default RankingUser
