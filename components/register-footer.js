'use strict'

import Link from 'next/link'
import { colors, typography } from './../components/ui/theme'

const RegisterFooter = () => (
  <footer>
    <nav>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/faq">
        <a>FAQ</a>
      </Link>
      <Link href="/terms">
        <a>Terms of Services</a>
      </Link>
      <Link href="/privacy">
        <a>Privacy Policy</a>
      </Link>

      <a href="mailto:ritoplzteam@gmail.com">Contact</a>
    </nav>

    <p>Copyright © 2016 Ritoplz. All rights reserved.</p>

    <style jsx>{`
      footer {
        margin-top: 50px;
      }

      nav {
        display: flex;
      }

      a {
        font-size: ${typography.f14};
        margin-right: 10px;
        color: ${colors.white};
        opacity: .85;
        transition: .15s ease-in-out;
        cursor: pointer;
      }

      a:hover {
        opacity: 1;
      }

      p {
        font-size: ${typography.f12};
        color: ${colors.white};
        margin-top: 10px;
        opacity: .75;
      }
    `}</style>
  </footer>
)

export default RegisterFooter
