'use strict'

import { translate } from 'react-i18next'
import Link from 'next/link'

import { colors, typography } from './../components/ui/theme'

const RegisterFooter = ({ t, i18n }) => {
  return (
    <footer>
      <nav>
        <Link href="/about">
          <a>{t('About')}</a>
        </Link>
        <Link href="/faq">
          <a>FAQ</a>
        </Link>
        <Link href="/terms">
          <a>{t('Terms of Services')}</a>
        </Link>
        <Link href="/privacy">
          <a>{t('Privacy Policy')}</a>
        </Link>

        <a href="mailto:ritoplzteam@gmail.com">{t('Contact')}</a>
      </nav>

      <p>Copyright © 2017 Ritoplz. {t('All rights reserved')}.</p>

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
}

export default translate(['common'])(RegisterFooter)
