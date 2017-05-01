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
        <img className="topPlayersAvatar" src={`https://ddragon.leagueoflegends.com/cdn/7.1.1/img/profileicon/${profileIconId}.png`} alt=""/>

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
          backgroundColor: #fff;
          borderRadius: 10px;
          boxShadow: 0 10px 40px rgba(0, 0, 0, .1);
          flexBasis: 31%;
          marginBottom: 30px;
          textAlign: center;
        }

        .topPlayersCard {
          padding: 50px 20px 30px;
        }

        .topPlayersAvatar {
          height: 70px;
          width: 70px;
          borderRadius: 10px;
          marginBottom: 15px;
        }

        .topPlayersName {
          fontSize: 1.75rem;
          color: #333;
        }

        .topPlayersSummoner {
          color: #999;
          fontSize: 1rem;
          fontWeight: 600;
          marginTop: 5px;
        }

        .tierInfo {
          flexBasis: 40%;
          textAlign: left;
        }

        .tier {
          color: #333;
          marginTop: 26px;
          marginBottom: -22px;
          fontWeight: 600;
          fontSize: .9rem;
        }

        .lp {
          color: #333;
          float: right;
          marginBottom: 5px;
          fontSize: 14px;
          fontWeight: 600;
        }

        .location {
          fontSize: .9rem;
          fontWeight: 400;
          color: #999;
          marginTop: 10px;
          lineHeight: 1.25rem;
        }

        .pin {
          width: 10px;
          marginRight: 5px;
          verticalAlign: middle;
        }
      `}</style>
    </li>
  )
}
