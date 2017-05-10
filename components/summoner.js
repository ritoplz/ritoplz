'use strict'

import PropTypes from 'prop-types'
import SummonerActive from './summoner-active'
import SummonerInactive from './summoner-inactive'

const Summoner = ({ summoner }) => {
  let summonerCard

  if (summoner.active) {
    summonerCard = <SummonerActive summoner={summoner} />
  } else {
    summonerCard = <SummonerInactive summoner={summoner} />
  }

  return (
    <div>
      {summonerCard}

      <style jsx>{`
        div {
          box-shadow: 0 1px 5px rgba(0, 0, 0, .12);
          border-radius: 6px;
          margin-bottom: 25px;
          padding: 25px 10px;
          flex-basis: calc(25% - 15px);
          text-align: center;
        }
      `}</style>
    </div>
  )
}

Summoner.propTypes = {
  summoner: PropTypes.object
}

export default Summoner
