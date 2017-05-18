'use strict'

import PropTypes from 'prop-types'
import { colors, typography, phone } from './../components/ui/theme'

const Summoners = ({ summoners, selectSummoner, summonerSelected }) => {
  let summonersList

  if (summoners.length > 0) {
    summonersList = summoners.map((summoner, index) => {
      const { name, profileIconId, rankedSolo } = summoner
      const selected = summonerSelected === index ? 'selected' : ''

      return (
        <li
          key={summoner._id}
          onClick={() => selectSummoner(index)}
          className={selected}
        >
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/7.8.1/img/profileicon/${profileIconId}.png`}
            alt={name}
          />

          <div>
            <h4>{name}</h4>
            <span>{rankedSolo.tier} {rankedSolo.division}</span>
          </div>

          <style jsx>{`
            li {
              box-shadow: 0 10px 30px rgba(50, 50, 93, .05), 0 5px 12px rgba(0, 0, 0, .05);
              border-radius: 6px;
              display: flex;
              padding: 15px;
              align-items: center;
              flex-basis: calc(25% - 10px);
              cursor: pointer;
              transition: .15s ease-in-out;
              border: 1px solid transparent;
              margin-bottom: 20px;
            }

            li:hover {
              transform: translateY(-5px);
            }

            .selected {
              border: 1px solid ${colors.grayLight};
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

            @media ${phone} {
              li {
                flex-basis: calc(50% - 10px);
              }
            }
          `}</style>
        </li>
      )
    })
  }

  return (
    <ul>
      {summonersList}
      <li className="fake" />
      <li className="fake" />
      <li className="fake" />

      <style jsx>{`
        ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          width: 100%;
        }

        .fake {
          flex-basis: calc(25% - 10px);
        }
      `}</style>
    </ul>
  )
}

Summoners.propTypes = {
  summoners: PropTypes.array,
  summonerSelected: PropTypes.number,
  selectSummoner: PropTypes.func
}

export default Summoners
