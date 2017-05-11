'use strict'

import PropTypes from 'prop-types'
import SummonerActive from './summoner-active'
import SummonerInactive from './summoner-inactive'

const Summoner = ({ summoner, confirmSummoner }) => {
  let summonerCard
  const summonerClass = summoner.active
    ? 'summoner-active'
    : 'summoner-inactive'
  if (summoner.active) {
    summonerCard = <SummonerActive summoner={summoner} />
  } else {
    summonerCard = (
      <SummonerInactive summoner={summoner} confirmSummoner={confirmSummoner} />
    )
  }

  return (
    <div className={summonerClass}>
      {summonerCard}

      <style jsx>{`
        div {
          box-shadow: 0 1px 5px rgba(0, 0, 0, .12);
          border-radius: 6px;
          margin-bottom: 25px;
        }

        .summoner-active {
          padding: 25px 10px;
          flex-basis: calc(33.33% - 15px);
          text-align: center;
        }

        .summoner-inactive {
          flex-basis: 100%;
          padding: 15px 20px;
        }
      `}</style>
    </div>
  )
}

Summoner.propTypes = {
  summoner: PropTypes.object,
  confirmSummoner: PropTypes.func.isRequired
}

export default Summoner
