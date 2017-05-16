'use strict'

import Link from 'next/link'
import { Row } from './../components/ui'
import { colors, typography, phone } from './../components/ui/theme'

const Footer = () => (
  <footer>
    <Row>
      <ul>
        <li>
          <Link prefetch href="/about">
            <a>About</a>
          </Link>
        </li>

        <li>
          <Link prefetch href="/signup">
            <a>Create an account</a>
          </Link>
        </li>

        <li>
          <Link href="https://github.com/ritoplz/ritoplz/releases">
            <a>Releases</a>
          </Link>
        </li>

        <li>
          <Link href="https://www.dropbox.com/sh/66azn9735a3yehp/AADK7GzGwtYi4iDZsSHl6zCda?dl=0">
            <a>Press</a>
          </Link>
        </li>

        <li>
          <Link prefetch href="/faq">
            <a>FAQ</a>
          </Link>
        </li>

        <li>
          <Link prefetch href="/terms">
            <a>Terms of Services</a>
          </Link>
        </li>

        <li>
          <Link prefetch href="/privacy">
            <a>Privacy Policy</a>
          </Link>
        </li>

        <li>
          <a href="mailto:ritoplzteam@gmail.com">Contact</a>
        </li>
      </ul>

      <p>Made with ❤ by Ritoplz — © 2017. All rights reserved.</p>
    </Row>

    <style jsx>{`
      footer {
        border-top: 1px solid ${colors.border};
        padding-top: 50px;
        padding-bottom: 50px;
        text-align: center;
      }

      ul {
        display: flex;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        justify-content: space-around;
        max-width: 80%;
        margin-bottom: 30px;
        flex-wrap: wrap;
      }

      a {
        color: ${colors.grayDark};
        opacity: .75;
        font-size: ${typography.f14};
        transition: .15s ease-in-out;
      }

      a:hover {
        opacity: 1;
      }

      p {
        color: ${colors.gray};
        font-size: ${typography.f14};
      }

      @media ${phone} {
        li {
          flex-basis: 100%;
          margin-top: 10px;
          margin-bottom: 10px;
        }
      }
    `}</style>
  </footer>
)

export default Footer
