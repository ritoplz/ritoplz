'use strict'

import { translate } from 'react-i18next'
import PropTypes from 'prop-types'
import TimeAgo from 'timeago-react'

import { colors, typography } from './../components/ui/theme'
import { ClockIcon } from './../components/icons'

const ProfileMatch = ({ championIcon, match, t }) => (
  <div className="match">
    <header className="match-header">
      <h4 className="match-header__type">
        <span className="match-header__type--title">
          {match.subType === 'NORMAL'
            ? `${t('Normal')}`
            : `${t('Ranked Solo')}`}
          {' '}
        </span>
        — <TimeAgo datetime={match.createDate} />
      </h4>

      <div>
        <ClockIcon />
        <span className="match-header__time">
          {Math.floor(match.stats.timePlayed / 60)} mins
        </span>
      </div>
    </header>

    <div className="match-info">
      <img className="match-info__avatar" src={championIcon} alt="" />

      <div>
        <h5 className="match-info__title">
          {match.stats.championsKilled || 0}
        </h5>
        <span className="match-info__subtitle">{t('Kills')}</span>
      </div>

      <div>
        <h5 className="match-info__title">{match.stats.assists || 0}</h5>
        <span className="match-info__subtitle">{t('Assists')}</span>
      </div>

      <div>
        <h5 className="match-info__title">{match.stats.numDeaths || 0}</h5>
        <span className="match-info__subtitle">{t('Deaths')}</span>
      </div>

      <h5 className="match-info__title">
        <span
          className={
            match.stats.win
              ? 'match-info__title--victory'
              : 'match-info__title--defeat'
          }
        >
          {match.stats.win ? `${t('Victory')}` : `${t('Defeat')}`}
        </span>
      </h5>
    </div>

    <style jsx>{`
      .match {
        width: 100%;
        background-color: ${colors.white};
        border-radius: 5px;
        box-shadow: 0 1px 6px rgba(0, 0, 0, .1);
        padding-left: 15px;
        padding-right: 15px;
        margin-bottom: 20px;
        border: 1px solid transparent;
      }

      .match-header {
        display: flex;
        justify-content: space-between;
        padding-top: 10px;
        padding-bottom: 10px;
        align-items: center;
      }

      .match-header__type {
        font-size: 12px;
        font-weight: 500;
        color: ${colors.gray};
      }

      .match-header__type--title {
        color: ${colors.grayDark};
        font-size: ${typography.f14};
        font-weight: 600;
      }

      .match-header__time {
        color: ${colors.gray};
        margin-left: 5px;
        font-size: ${typography.f12};
        font-weight: 500;
      }

      .match-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 15px;
        padding-bottom: 15px;
        border-top: 1px solid ${colors.border};
      }

      .match-info__avatar {
        width: 45px;
        height: 45px;
        border-radius: 3px;
        flex-basis: 45px;
        margin-right: 15px;
      }

      .match-info__title {
        display: block;
        font-weight: 600;
        color: ${colors.grayDark};
        font-size: ${typography.f20};
        margin-bottom: 2px;
      }

      .match-info__title--victory {
        color: ${colors.success}
      }

      .match-info__title--defeat {
        color: ${colors.danger}
      }

      .match-info__subtitle {
        color: ${colors.gray};
        display: block;
        font-weight: 500;
        font-size: ${typography.f12};
      }
    `}</style>
  </div>
)

ProfileMatch.propTypes = {
  match: PropTypes.object,
  championIcon: PropTypes.string,
  t: PropTypes.func
}

export default translate(['common'])(ProfileMatch)
