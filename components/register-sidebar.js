'use strict'

import Link from 'next/link'
import PropTypes from 'prop-types'

import Logo from './../components/logo'
import { phone } from './ui/theme'

const RegisterSidebar = ({ bg, children }) => (
  <aside className="sidebar" style={{ backgroundImage: `url(static/${bg})` }}>
    <Link prefetch href="/">
      <a className="sidebar__logo">
        <Logo type="white" size="80px" />
      </a>
    </Link>

    <div className="heading">
      {children}
    </div>

    <style jsx>{`
      .sidebar {
        flex-basis: 475px;
        display: flex;
        flex-direction: column-reverse;
        padding: 50px;
        backgroundposition: center center;
        background-size: cover;
      }

      .sidebar__logo {
        position: absolute;
        top: 50px;
      }

      @media ${phone} {
        .sidebar {
          display: none;
        }
      }
    `}</style>
  </aside>
)

RegisterSidebar.propTypes = {
  bg: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default RegisterSidebar
