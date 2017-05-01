'use strict'

import React from 'react'
import getTier from 'ritoplz-tier'
import { Line } from 'rc-progress'

export default props => {
  const { data: { username, name, profileIconId, country, city, state } } = props
  const location = `${city}, ${state} — ${country}`

  return (
    <li className="rankingItem">
      <figure className="image">
        <img className="avatar" src={`https://ddragon.leagueoflegends.com/cdn/7.1.1/img/profileicon/${profileIconId}.png`} alt=""/>
      </figure>

      <div className="rankingInfo">
        <h2 className="username">{username}</h2>
        <h3 className="summoner">{name}</h3>
        <h4 className="location">
          <img className="pin" src="static/location-pin.svg" alt=""/>
          {location}
        </h4>
      </div>

      <style jsx>{`
        .rankingItem {
          margin-bottom: 20px;
          border: 1px solid #F3F5FB;
          border-radius: 10px;
          box-shadow: 0 10px 50px rgba(0, 0, 0, .025);
          padding-left: 25px;
          padding-right: 25px;
          text-align: center;
          padding: 15px 25px 30px;
          flex-basis: 32%;
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
