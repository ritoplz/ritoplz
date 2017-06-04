'use strict'

import { translate } from 'react-i18next'
import PropTypes from 'prop-types'
import hashAvatar from 'react-hash-avatar'
import renderHTML from 'react-render-html'

import { colors, typography, phone } from './ui/theme'
import { ArrowDownIcon, FacebookIcon, TwitterIcon } from './icons'
import ProfileSummoners from './profile-summoners'

const ProfileUser = ({ profile, currentUser, index, t, changeSummoner }) => {
  let summoners
  const avatar = hashAvatar(profile.username, { size: 40 })
  const userName = profile.name
  const location = profile.country
    ? `${profile.city}, ${profile.state} — ${profile.country} 🇧🇷`
    : `${t('User has no location')}`
  const userAvatar = renderHTML(avatar)
  const textTwitter = `Check my profile on Ritoplz and see my summoner's analytics https://ritoplz.com/profile/${profile.username}`

  if (profile.summoners.length > 0) {
    const summonerName = profile.summoners[index].name

    summoners = (
      <div className="user-summoners">
        <span className="user-summoners__title">{t('Summoner')}</span>
        <h4 className="user-summoners__name">
          <span>{summonerName}</span>
          <ArrowDownIcon />
        </h4>

        <div className="user-summoners-list">
          <ProfileSummoners
            summoners={profile.summoners}
            profile={profile}
            changeSummoner={changeSummoner}
            currentUser={currentUser}
          />
        </div>

        <style jsx>{`
          .user-summoners {
            margin-left: 20px;
            padding-left: 20px;
            position: relative;
            cursor: pointer;
          }

          .user-summoners:hover .user-summoners-list,
          .user-summoners-list:hover {
            display: block;
          }

          .user-summoners:before {
            content: "";
            width: 1px;
            height: 20px;
            background-color: #F1F2F7;
            position: absolute;
            top: 12px;
            left: 0;
          }

          .user-summoners__title {
            color: ${colors.gray};;
            font-size: 10px;
            text-transform: uppercase;
            font-weight: 500;
          }

          .user-summoners__name {
            color: #292E31;
            font-size: 20px;
            font-weight: 400;
          }

          .user-summoners__name span {
            margin-right: 10px;
          }

          .user-summoners-list {
            display: none;
          }
        `}</style>
      </div>
    )
  }

  return (
    <section>
      <div className="user">
        <div className="user__avatar">
          {userAvatar}
        </div>

        <div>
          <h3 className="user__name">{userName}</h3>
          <span className="user__location">{location}</span>
        </div>

        {summoners}
      </div>

      <div className="share">
        <span className="share__title">Share on:</span>

        <a href="/" className="share__icon">
          <FacebookIcon />
        </a>

        <a
          href={`https://twitter.com/intent/tweet?text=${textTwitter}&hashtags=Ritoplz,LeagueOfLegends&via=ritoplzrankings`}
          className="share__icon"
        >
          <TwitterIcon />
        </a>
      </div>

      <style jsx>{`
        section {
          padding-top: 50px;
          padding-bottom: 50px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .user {
          display: flex;
          align-items: center;
        }

        .user__avatar {
          position: relative;
          border-radius: 50%;
          overflow: hidden;
          height: 40px;
          width: 40px;
          margin-right: 20px;
        }

        .user__name {
          color: ${colors.primary};
          font-weight: 400;
          font-size: ${typography.f30};
        }

        .user__location {
          font-size: ${typography.f12};
          color: ${colors.gray};
          font-weight: 500;
        }

        .share {
          text-align: right;
        }

        .share__title {
          font-size: 10px;
          color: ${colors.gray};;
          text-transform: uppercase;
          font-weight: 500;
          display: block;
          margin-bottom: 5px;
        }

        .share__icon {
          display: inline-block;
          margin-left: 15px;
          cursor: pointer;
        }

        @media ${phone} {
          .share {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}

ProfileUser.propTypes = {
  profile: PropTypes.object,
  currentUser: PropTypes.object,
  index: PropTypes.number,
  changeSummoner: PropTypes.func,
  t: PropTypes.func
}

export default translate(['common'])(ProfileUser)
