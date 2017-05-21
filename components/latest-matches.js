'use strict'

import { translate } from 'react-i18next'
import PropTypes from 'prop-types'

import ProfileMatch from './profile-match'

const LatestMatches = ({ matches, champions }) => {
  let championIcon
  let matchList

  if (matches) {
    matchList = matches.games.map(match => {
      Object.keys(champions).map(champion => {
        if (
          champions[champion].key.toString() === match.championId.toString()
        ) {
          championIcon = `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${champions[champion].image.full}`
        }
      })

      return (
        <ProfileMatch
          championIcon={championIcon}
          match={match}
          key={match.gameId}
        />
      )
    })
  }

  return (
    <div>
      {matchList}
    </div>
  )
}

LatestMatches.propTypes = {
  matches: PropTypes.object,
  champions: PropTypes.object
}

export default translate(['common'])(LatestMatches)
