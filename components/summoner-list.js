'use strict'

import PropTypes from 'prop-types'
import Summoner from './summoner'
import EmptyState from './empty-state'

const SummonerList = ({ summoners, requested, confirmSummoner }) => {
  let summonerList

  if (requested && summoners.length > 0) {
    summonerList = summoners.map(summoner => {
      return <Summoner summoner={summoner} confirmSummoner={confirmSummoner} />
    })
  } else {
    summonerList = <EmptyState />
  }

  return (
    <div>
      {summonerList}

      <div className="fake" />
      <div className="fake" />
      <div className="fake" />

      <style jsx>{`
        div {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .fake {
          flex-basis: calc(25% - 15px);
        }
      `}</style>
    </div>
  )
}

SummonerList.propTypes = {
  summoners: PropTypes.array,
  requested: PropTypes.bool,
  confirmSummoner: PropTypes.func
}

export default SummonerList
