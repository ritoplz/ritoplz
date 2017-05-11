'use strict'

import PropTypes from 'prop-types'
import { Badge } from './../components/ui'
import { colors, typography } from './../components/ui/theme'

const SummonerActive = ({ summoner }) => (
  <div className="summoner">
    <img
      className="summoner__avatar"
      src={`https://ddragon.leagueoflegends.com/cdn/7.8.1/img/profileicon/${summoner.profileIconId}.png`}
      alt={summoner.name}
    />

    <h3 className="summoner__name">{summoner.name}</h3>
    <span className="summoner__rank">
      {summoner.rankedSolo.tier} {summoner.rankedSolo.division}
    </span>

    <div className="summoner-status">
      <Badge type="success">confirmed</Badge>
    </div>

    <style jsx>{`
      .summoner__avatar {
        width: 60px;
        height: 60px;
        border-radius: 6px;
        margin-bottom: 10px;
      }

      .summoner__name {
        font-size: ${typography.f20};
        font-weight: 600;
        color: ${colors.heading};
        margin-bottom: 2px;
      }

      .summoner__rank {
        font-size: ${typography.f12};
        font-weight: 600;
        color: ${colors.gray};
      }

      .summoner-status {
        display: block;
        margin-top: 15px;
      }
    `}</style>
  </div>
)

SummonerActive.propTypes = {
  summoner: PropTypes.object
}

export default SummonerActive
