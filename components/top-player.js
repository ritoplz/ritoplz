'use strict'

import React from 'react'
import { Line } from 'rc-progress'

export default props => {
  const { data: { username, name, rankedSolo, profileIconId, country, city, state } } = props
  const location = `${city}, ${state} — ${country}`
  let maxLp
  let userLp
  if (rankedSolo.tier === 'CHALLENGER' || rankedSolo.tier === 'MASTER') {
    userLp = 100
  } else {
    userLp = rankedSolo.lp
    maxLp = (<span>/ 100</span>)
  }

  return (
    <li className="topPlayersItem">
      <article className="topPlayersCard">
        <img className="topPlayersAvatar" src={`https://ddragon.leagueoflegends.com/cdn/7.8.1/img/profileicon/${profileIconId}.png`} alt=""/>

        <h3 className="topPlayersName">{username}</h3>
        <h4 className="topPlayersSummoner">{name} • W: {rankedSolo.wins} / L: {rankedSolo.losses}</h4>
        <h4 className="location">
          <img className="pin"src="static/location-pin.svg" alt=""/>
          {location}
        </h4>

        <div className="tierInfo">
          <h4 className="tier">{rankedSolo.tier} {rankedSolo.division}</h4>
          <span className="lp">LP {rankedSolo.lp} { maxLp }</span>
          <Line percent={userLp} strokeWidth="1.5" strokeColor="#52bdab" trailWidth="1.5" trailColor="#eee"/>
        </div>
      </article>

      <style jsx>{`
        .topPlayersItem {
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, .1);
          flex-basis: 31%;
          margin-bottom: 30px;
          text-align: center;
        }

        .topPlayersCard {
          padding: 50px 20px 30px;
        }

        .topPlayersAvatar {
          height: 70px;
          width: 70px;
          border-radius: 10px;
          margin-bottom: 15px;
        }

        .topPlayersName {
          font-size: 1.75rem;
          color: #333;
        }

        .topPlayersSummoner {
          color: #999;
          font-size: 1rem;
          font-weight: 600;
          margin-top: 5px;
        }

        .tierInfo {
          flex-basis: 40%;
          text-align: left;
        }

        .tier {
          color: #333;
          margin-top: 26px;
          margin-bottom: -22px;
          font-weight: 600;
          font-size: .9rem;
        }

        .lp {
          color: #333;
          float: right;
          margin-bottom: 5px;
          font-size: 14px;
          font-weight: 600;
        }

        .location {
          font-size: .9rem;
          font-weight: 400;
          color: #999;
          margin-top: 10px;
          line-height: 1.25rem;
        }

        .pin {
          width: 10px;
          margin-right: 5px;
          vertical-align: middle;
        }
      `}</style>
    </li>
  )
}
