'use strict'

import Link from 'next/link'
import { colors, typography } from './ui/theme'

const MenuUser = () => {
  return (
    <span>
      <Link href="/profile"><a>Bu Kinoshita</a></Link>

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
      `}</style>
    </span>
  )
}

export default MenuUser
