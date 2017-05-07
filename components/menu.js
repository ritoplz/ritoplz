'use strict'

import { Component } from 'react'
import Link from 'next/link'
import { colors } from './ui/theme'
import { UiLink } from './ui'
import MenuUser from './menu-user'
import { isLogged } from './../services/auth'

class Menu extends Component {
  constructor() {
    super()
    this.state = { rendered: false }
  }

  componentDidMount() {
    this.setState({ rendered: true })
  }

  render() {
    let showUser

    if (isLogged() && this.state.rendered) {
      showUser = (
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
    } else {
      showUser = (
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

          <div>
            <UiLink href="/login" ui="primary small">Login</UiLink>
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
}

export default Menu
