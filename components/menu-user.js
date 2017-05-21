'use strict'

import PropTypes from 'prop-types'
import { Link } from 'next-url-prettifier'

import { colors, typography, phone } from './ui/theme'
import Router from './../services/routes'

const MenuUser = ({ user }) => {
  const name = user ? user.name : ''
  const username = user ? user.username : ''

  return (
    <span>
      <Link route={Router.linkPage('profile', { username })}>
        <a>{name}</a>
      </Link>

      <style jsx>{`
        span {
          font-size: ${typography.f14};
          height: auto;
          line-height: 1.5;
          margin-top: 30px;
          margin-bottom: 30px;
          margin-left: 30px;
        }

        a {
          color: ${colors.primary};
        }

        @media ${phone} {
          span {
            margin-left: 5px;
            padding-left: 10px;
            line-height: inherit;
            margin-top: 0;
            margin-bottom: 0;
          }
        }
      `}</style>
    </span>
  )
}

MenuUser.propTypes = {
  logged: PropTypes.bool,
  user: PropTypes.object
}

export default MenuUser
