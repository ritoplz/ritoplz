'use strict'

import Link from 'next/link'
import { colors } from './ui/theme'
import { Row } from './ui'
import Logo from './logo'
import Menu from './menu'

const Header = () => (
  <header>
    <Row>
      <div className="header-content">
        <Link prefetch href="/">
          <a>
            <Logo size="60px" />
          </a>
        </Link>

        <Menu />
      </div>
    </Row>

    <style jsx>{`
      header {
        height: 80px;
        line-height: 80px;
        border-bottom: 1px solid ${colors.border};
        position: sticky;
        top: 0;
        background-color: ${colors.white};
        z-index: 100;
      }

      .header-content {
        display: flex;
        justify-content: space-between;
      }
    `}</style>
  </header>
)

export default Header
