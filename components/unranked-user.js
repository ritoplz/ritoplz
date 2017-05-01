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
          marginBottom: 20px;
          border: 1px solid #F3F5FB;
          borderRadius: 10px;
          boxShadow: 0 10px 50px rgba(0, 0, 0, .025);
          paddingLeft: 25px;
          paddingRight: 25px;
          textAlign: center;
          padding: 15px 25px 30px;
          flexBasis: 32%;
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
