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
        <img className="avatar" src={`https://ddragon.leagueoflegends.com/cdn/7.8.1/img/profileicon/${profileIconId}.png`} alt=""/>
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
          margin-bottom: 20px;
          border: 1px solid #F3F5FB;
          border-radius: 10px;
          box-shadow: 0 10px 50px rgba(0, 0, 0, .025);
          padding-left: 25px;
          padding-right: 25px;
        }

        .position {
          line-height: 100px;
          flex-basis: 5%;
          color: #333;
        }

        .image {
          flex-basis: 10%;
          margin-top: 24px;
        }

        .avatar {
          height: 50px;
          width: 50px;
          border-radius: 5px;
        }

        .rankingInfo {
          margin-top: 14px;
          flex-basis: 35%;
        }

        .username {
          font-size: 1.25rem;
          font-weight: 400;
          color: #333;
        }

        .summoner {
          font-size: 1rem;
          font-weight: 600;
          color: rgba(0, 0, 0, .5);
        }

        .flag {
          flex-basis: 15%;
          text-align: right;
        }

        .flagImage {
          width: 70px;
          height: 65px;
          margin-top: 18px;
        }

        .tierInfo {
          flex-basis: 40%;
          text-align: left;
        }

        .tier {
          color: #333;
          margin-top: 34px;
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
          margin-top: 7px;
        }

        .pin {
          width: 10px;
          margin-right: 5px;
          vertical-align: middle;
        }

        .streak {
          margin-left: 10px;
          position: relative;
        }
      `}</style>
    </li>
  )
}
