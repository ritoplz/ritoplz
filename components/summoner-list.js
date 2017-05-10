'use strict'

import PropTypes from 'prop-types'
import Summoner from './summoner'

const SummonerList = ({ summoners, requested }) => {
  let summonerList

  if (requested && summoners) {
    summonerList = summoners.map(summoner => {
      return <Summoner summoner={summoner} />
    })
  } else {
    summonerList = <h1>No summoners</h1>
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
  requested: PropTypes.bool
}

export default SummonerList
