'use strict'

import { translate } from 'react-i18next'
import PropTypes from 'prop-types'

import { Badge } from './../components/ui'
import { colors, typography } from './../components/ui/theme'

const LatestMatches = ({ info, t }) => {
  let latestMatches

  if (info.recentMatches) {
    latestMatches = info.recentMatches.games.map((match, index) => {
      const badge = match.stats.win ? `${t('Won')}` : `${t('Lost')}`
      const badgeStatus = match.stats.win ? 'success' : 'danger'
      const timePlayed = Math.floor(match.stats.timePlayed / 60)
      let matchType

      if (match.subType === 'RANKED_SOLO_5x5') {
        matchType = 'Ranked 5x5'
      } else {
        matchType = 'Normal'
      }

      return (
        <tr key={`${info._id}${info.summonerId}${index}`}>
          <td>{matchType}</td>
          <td>{match.stats.doubleKills || 0}</td>
          <td>{match.stats.killingSprees || 0}</td>
          <td>{match.stats.largestKillingSpree || 0}</td>
          <td>{match.stats.championsKilled || 0}</td>
          <td>{match.stats.numDeaths || 0}</td>
          <td>{timePlayed} mins</td>
          <td><Badge type={badgeStatus}>{badge}</Badge></td>

          <style jsx>{`
            tr {
              width: 100%;
            }

            td {
              padding: 10px;
              border-bottom: 1px solid ${colors.border};
              text-align: center;
              font-size: ${typography.f14};
              color: ${colors.gray};
            }
          `}</style>
        </tr>
      )
    })
  }

  return (
    <table cellPadding="0" cellSpacing="0" width="100%">
      <thead>
        <tr>
          <th>{t('Type')}</th>
          <th>{t('Double Kills')}</th>
          <th>{t('Killing Sprees')}</th>
          <th>{t('Largest Killing Spree')}</th>
          <th>{t('Champions Killed')}</th>
          <th>{t('Deaths')}</th>
          <th>{t('Duration')}</th>
          <th>{t('Win/Lose')}</th>
        </tr>
      </thead>

      <tbody>
        {latestMatches}
      </tbody>

      <style jsx>{`
        table {
          background-color: ${colors.white};
          box-shadow: 0 10px 30px rgba(50, 50, 93, .05), 0 5px 12px rgba(0, 0, 0, .05);
          border-radius: 6px;
          max-width: 900px;
          overflow-x: auto;
          margin-bottom: 50px;
          position: relative;
          padding: 0;
          width: 100%;
          height: auto;
          border-collapse: collapse;
          text-align: center;
        }

        tr {
          width: 100%;
          border-bottom: 1px solid ${colors.border};
        }

        th {
          font-size: ${typography.f14};
          font-weight: 500;
          color: ${colors.grayDark};
          text-align: center;
          padding-top: 15px;
          padding-bottom: 15px;
        }
      `}</style>
    </table>
  )
}

LatestMatches.propTypes = {
  info: PropTypes.object,
  t: PropTypes.func
}

export default translate(['common'])(LatestMatches)
