'use strict'

import { translate } from 'react-i18next'
import PropTypes from 'prop-types'
import Link from 'next/link'

import { colors, typography, phone } from './ui/theme'
import { UiLink } from './ui'
import MenuUser from './menu-user'
import { SettingsIcon, LogoutIcon } from './icons'

const Menu = ({ logged, user, t }) => {
  let showUser
  if (logged) {
    showUser = (
      <ul>
        <li>
          <Link prefetch href="/rankings">
            <a>Rankings</a>
          </Link>
        </li>

        <li>
          <Link prefetch href="/my-summoners">
            <a>{t('My summoners')}</a>
          </Link>
        </li>

        <MenuUser user={user} />

        <span>
          <li>
            <Link prefetch href="/settings">
              <a><SettingsIcon /></a>
            </Link>

            <label>Settings</label>
          </li>

          <li>
            <Link prefetch href="/logout">
              <a><LogoutIcon /></a>
            </Link>

            <label>Logout</label>
          </li>
        </span>

        <style jsx>{`
          ul {
            display: flex;
          }

          li {
            margin-left: 30px;
            font-size: 14px;
          }

          a {
            color: ${colors.gray};
            display: block;
            transition: .15s ease-in-out;
          }

          a:hover {
            color: ${colors.grayDark};
          }

          span {
            display: inline-block;
            margin-left: 25px;
            border-left: 1px solid ${colors.border};
            height: 30px;
            line-height: 1.75;
            margin-top: 26px;
          }

          span li {
            display: inline-block;
            margin-left: 25px;
            position: relative;
          }

          span li:hover label {
            display: block;
          }

          label {
            position: absolute;
            left: -15px;
            font-size: ${typography.f10};
            background-color: ${colors.grayDark};
            padding: 4px 6px;
            border-radius: 3px;
            color: ${colors.white};
            top: 30px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, .21);
            transition: .15s;
            display: none;
          }

          label:before {
            content: "";
            position: absolute;
            width: 0;
            height: 0;
            border-left: 4px solid transparent;
            border-right: 4px solid transparent;
            border-bottom: 6px solid ${colors.grayDark};
            border-top: 4px solid transparent;
            margin-left: 13px;
            margin-top: -12px;
          }

          @media ${phone} {
            li {
              margin-left: 5px;
            }
          }
        `}</style>
      </ul>
    )
  } else {
    showUser = (
      <ul>
        <li>
          <Link prefetch href="/rankings">
            <a>Rankings</a>
          </Link>
        </li>

        <div>
          <UiLink href="/login" ui="primary small">{t('Login')}</UiLink>
        </div>

        <style jsx>{`
          ul {
            display: flex;
          }

          li {
            margin-left: 30px;
            font-size: 14px;
          }

          a {
            color: ${colors.gray};
            display: block;
            transition: .15s ease-in-out;
          }

          a:hover {
            color: ${colors.grayDark};
          }

          div {
            margin-left: 30px;
          }
        `}</style>
      </ul>
    )
  }

  return (
    <div>
      {showUser}
    </div>
  )
}

Menu.propTypes = {
  logged: PropTypes.bool,
  user: PropTypes.object,
  t: PropTypes.func
}

export default translate(['common'])(Menu)
