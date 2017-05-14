'use strict'

import PropTypes from 'prop-types'
import { colors, typography } from './../components/ui/theme'
import { Badge } from './../components/ui'

const SummonersActive = ({ summoners }) => {
  let activeSummoners

  if (summoners.length > 0) {
    activeSummoners = summoners.map(summoner => {
      const { name, profileIconId, rankedSolo } = summoner

      return (
        <li key={summoner._id}>
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/7.8.1/img/profileicon/${profileIconId}.png`}
            alt={name}
          />

          <div>
            <h4>{name}</h4>
            <span>{rankedSolo.tier} {rankedSolo.division}</span>
          </div>

          <Badge type="primary">confirmed</Badge>

          <style jsx>{`
            li {
              box-shadow: 0 10px 30px rgba(50, 50, 93, .05), 0 5px 12px rgba(0, 0, 0, .05);
              border-radius: 6px;
              display: flex;
              padding: 15px;
              margin-bottom: 20px;
              align-items: center;
            }

            img {
              width: 50px;
              height: 50px;
              border-radius: 6px;
              margin-right: 15px;
            }

            div {
              flex-basis: calc(100% - 65px);
            }

            h4 {
              font-size: ${typography.f16};
              font-weight: 600;
              color: ${colors.heading};
            }

            span {
              font-size: ${typography.f12};
              font-weight: 500;
              color: ${colors.gray};
            }
          `}</style>
        </li>
      )
    })
  }

  return (
    <ul>
      {activeSummoners}

      <style jsx>{`
        ul {
          flex-basis: 48%;
        }
      `}</style>
    </ul>
  )
}

SummonersActive.propTypes = {
  summoners: PropTypes.array
}

export default SummonersActive
