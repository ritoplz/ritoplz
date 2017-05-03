'use strict'

import Link from 'next/link'
import { colors } from './ui/theme'
import MenuUser from './menu-user'

const Menu = () => (
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

    <MenuUser />

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

export default Menu
