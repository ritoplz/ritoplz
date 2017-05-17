'use strict'

import { translate } from 'react-i18next'
import Link from 'next/link'

import { Row } from './../components/ui'
import { colors, typography, phone } from './../components/ui/theme'
import {
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  GithubIcon
} from './../components/icons'

const Footer = ({ t }) => (
  <footer>
    <Row>
      <ul className="social">
        <li>
          <a href="https://www.facebook.com/ritoplzrankings/">
            <FacebookIcon />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/ritoplzrankings">
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/ritoplzrankings">
            <InstagramIcon />
          </a>
        </li>
        <li>
          <a href="https://github.com/ritoplz/ritoplz">
            <GithubIcon />
          </a>
        </li>
      </ul>

      <ul>
        <li>
          <Link prefetch href="/about">
            <a>{t('About')}</a>
          </Link>
        </li>

        <li>
          <Link prefetch href="/signup">
            <a>{t('Create an account')}</a>
          </Link>
        </li>

        <li>
          <Link href="https://github.com/ritoplz/ritoplz/releases">
            <a>{t('Releases')}</a>
          </Link>
        </li>

        <li>
          <Link href="https://www.dropbox.com/sh/66azn9735a3yehp/AADK7GzGwtYi4iDZsSHl6zCda?dl=0">
            <a>{t('Press')}</a>
          </Link>
        </li>

        <li>
          <Link prefetch href="/faq">
            <a>{t('FAQ')}</a>
          </Link>
        </li>

        <li>
          <Link prefetch href="/terms">
            <a>{t('Terms of Services')}</a>
          </Link>
        </li>

        <li>
          <Link prefetch href="/privacy">
            <a>{t('Privacy Policy')}</a>
          </Link>
        </li>

        <li>
          <a href="mailto:ritoplzteam@gmail.com">{t('Contact')}</a>
        </li>
      </ul>

      <p>{t('Made with')} ❤ {t('by')} Ritoplz — © 2017. {t('All rights reserved')}.</p>
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

      .social {
        max-width: 200px;
      }

      @media ${phone} {
        li {
          flex-basis: 100%;
          margin-top: 10px;
          margin-bottom: 10px;
        }

        .social li {
          flex-basis: 25%;
        }
      }
    `}</style>
  </footer>
)

export default translate(['common'])(Footer)
