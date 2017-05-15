'use strict'

import PropTypes from 'prop-types'
import Link from 'next/link'
import { colors, typography, phone } from './ui/theme'

const MenuUser = ({ user }) => {
  const userName = user ? user.name : ''

  return (
    <span>
      <Link href="/profile"><a>{userName}</a></Link>

      <style jsx>{`
        span {
          font-size: ${typography.f14};
          margin-left: 25px;
          padding-left: 25px;
          border-left: 1px solid ${colors.border};
          height: auto;
          line-height: 1.5;
          margin-top: 30px;
          margin-bottom: 30px;
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
