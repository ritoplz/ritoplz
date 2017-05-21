'use strict'

import { translate } from 'react-i18next'
import PropTypes from 'prop-types'
import ritoplzTier from 'ritoplz-tier'

import PageTitle from './page-title'
import LatestMatches from './latest-matches'
import { colors, typography } from './ui/theme'

const ProfileSummoner = ({ summoners, index, champions, t }) => {
  const flag = ritoplzTier(summoners[index].rankedSolo.tier).flag.original

  return (
    <div>
      <hr />
      <section>
        <div className="summoner-info">
          <img
            className="summoner-info__flag"
            src={flag}
            alt={summoners[index].tier}
          />

          <div>
            <h4 className="summoner-info__name">{summoners[index].name}</h4>
            <span className="summoner-info__tier">
              {summoners[index].rankedSolo.tier}
              {' '}
              {summoners[index].rankedSolo.division}
              {' '}
              — LP
              {' '}
              {summoners[index].rankedSolo.lp}
            </span>
          </div>
        </div>

        <ul className="summoner-games">
          <li className="summoner-games-item">
            <h5 className="summoner-games__title">
              {summoners[index].rankedSolo.wins +
                summoners[index].rankedSolo.losses}
            </h5>
            <span className="summoner-games__subtitle">{t('games')}</span>
          </li>

          <li className="summoner-games-item">
            <h5 className="summoner-games__title">
              {summoners[index].rankedSolo.wins}
            </h5>
            <span className="summoner-games__subtitle">{t('wins')}</span>
          </li>

          <li className="summoner-games-item">
            <h5 className="summoner-games__title">
              {summoners[index].rankedSolo.losses}
            </h5>
            <span className="summoner-games__subtitle">{t('losses')}</span>
          </li>
        </ul>
      </section>

      <PageTitle title="Most recent games" />

      <LatestMatches
        matches={summoners[index].recentMatches}
        champions={champions}
      />

      <style jsx>{`
        hr {
          border-top: 1px solid ${colors.inputBorder};
          border-bottom: 0;
          width: 100px;
          margin-left: auto;
          margin-right: auto;
        }

        section {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .summoner-info {
          display: flex;
          align-items: center;
        }

        .summoner-info__flag {
          width: 150px;
          height: 150px;
          margin-right: 20px;
        }

        .summoner-info__name {
          color: ${colors.grayDark};
          font-size: ${typography.f30};
        }

        .summoner-info__tier {
          display: block;
          font-weight: 600;
          font-size: ${typography.f12};
          margin-top: 5px;
          color: ${colors.gray};
          text-transform: uppercase;
        }

        .summoner-games {
          display: flex;
        }

        .summoner-games-item {
          text-align: center;
          padding-left: 20px;
          margin-left: 20px;
          border-left: 1px solid ${colors.border};
        }

        .summoner-games__title {
          font-size: ${typography.f20};
        }

        .summoner-games__subtitle {
          font-size: ${typography.f12};
          text-transform: uppercase;
          color: ${colors.gray};
          font-weight: 600;
          margin-top: 5px;
          display: block;
        }
      `}</style>
    </div>
  )
}

ProfileSummoner.propTypes = {
  summoners: PropTypes.array,
  index: PropTypes.number,
  champions: PropTypes.object,
  t: PropTypes.func
}

export default translate(['common'])(ProfileSummoner)
