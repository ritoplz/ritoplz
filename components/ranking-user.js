'use strict'

import React from 'react'
import getTier from 'ritoplz-tier'
import { Line } from 'rc-progress'

export default props => {
  const { data: { username, name, rankedSolo, profileIconId, country, city, state } } = props
  const tier = rankedSolo.tier
  const flag = getTier(tier).flag.small
  const location = `${city}, ${state} — ${country}`
  const streak = rankedSolo.isHotStreak ? '🔥' : ''
  let maxLp
  let userLp
  if (tier === 'CHALLENGER' || tier === 'MASTER') {
    userLp = 100
  } else {
    userLp = rankedSolo.lp
    maxLp = (<span>/ 100</span>)
  }

  return (
    <li className="rankingItem">
      <h4 className="position">{props.position}.</h4>

      <figure className="image">
        <img className="avatar" src={`https://ddragon.leagueoflegends.com/cdn/7.1.1/img/profileicon/${profileIconId}.png`} alt=""/>
      </figure>

      <div className="rankingInfo">
        <h2 className="username">{username}</h2>
        <h3 className="summoner">{name}</h3>
        <h4 className="location">
          <img className="pin"src="static/location-pin.svg" alt=""/>
          {location}
        </h4>
      </div>

      <div className="tierInfo">
        <h4 className="tier">{rankedSolo.tier} {rankedSolo.division}</h4>
        <span className="lp">
          LP {rankedSolo.lp} { maxLp }
          <span className="streak" title="Hot streak">{streak}</span>
        </span>

        <Line percent={userLp} strokeWidth="1.5" strokeColor="#52bdab" trailWidth="1.5" trailColor="#eee"/>
      </div>

      <span className="flag">
        <img className="flagImage" src={flag} alt=""/>
      </span>

      <style jsx>{`
        .rankingItem {
          display: flex;
          minHeight: 100px;
          marginBottom: 20px;
          border: 1px solid #F3F5FB;
          borderRadius: 10px;
          boxShadow: 0 10px 50px rgba(0, 0, 0, .025);
          paddingLeft: 25px;
          paddingRight: 25px;
        }

        .position {
          lineHeight: 100px;
          flexBasis: 5%;
          color: #333;
        }

        .image {
          flexBasis: 10%;
          marginTop: 24px;
        }

        .avatar {
          height: 50px;
          width: 50px;
          borderRadius: 5px;
        }

        .rankingInfo {
          marginTop: 14px;
          flexBasis: 35%;
        }

        .username {
          fontSize: 1.25rem;
          fontWeight: 400;
          color: #333;
        }

        .summoner {
          fontSize: 1rem;
          fontWeight: 600;
          color: rgba(0, 0, 0, .5);
        }

        .flag {
          flexBasis: 15%;
          textAlign: right;
        }

        .flagImage {
          width: 70px;
          height: 65px;
          marginTop: 18px;
        }

        .tierInfo {
          flexBasis: 40%;
          textAlign: left;
        }

        .tier {
          color: #333;
          marginTop: 34px;
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
          marginTop: 7px;
        }

        .pin {
          width: 10px;
          marginRight: 5px;
          verticalAlign: middle;
        }

        .streak {
          marginLeft: 10px;
          position: relative;
        }
      `}</style>
    </li>
  )
}
