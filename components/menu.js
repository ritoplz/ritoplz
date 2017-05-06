'use strict'

import Link from 'next/link'
import { colors } from './ui/theme'
import { UiLink } from './ui'
import MenuUser from './menu-user'
import { isLogged } from './../services/auth'

const Menu = () => {
  let showUser

  if (isLogged()) {
    showUser = <MenuUser />
  } else {
    showUser = (
      <div>
        <UiLink href="/login" ui="primary small">Login</UiLink>

        <style jsx>{`
          div {
            margin-left: 30px;
          }
        `}</style>
      </div>
    )
  }

  return (
    <ul>
      <li>
        <Link prefetch href="/rankings">
          <a>Rankings</a>
        </Link>
      </li>

      <li>
        <Link prefetch href="/settings">
          <a>Settings</a>
        </Link>
      </li>

      {showUser}

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
      `}</style>
    </ul>
  )
}

export default Menu
