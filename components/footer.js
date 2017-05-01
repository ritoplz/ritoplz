'use strict'

import React from 'react'
import Link from 'next/link'

export default () => {
  return (
    <footer className="footer">
      <div className="row">
        <span className="copyright">Copyright © 2016 Ritoplz. All rights reserved.</span>

        <nav className="footerLinks">
          <ul>
            <li className="item">
              <Link href="https://github.com/ritoplz">
                <img src="/static/github.svg"/>
              </Link>
            </li>

            <li className="item">
              <Link href="https://twitter.com/ritoplzrankings">
                <img src="/static/twitter.svg"/>
              </Link>
            </li>

            <li className="item">
              <Link href="/faq">
                <span className="link">FAQ</span>
              </Link>
            </li>

            <li className="item">
              <Link href="/terms">
                <span className="link">Termos de Serviço</span>
              </Link>
            </li>

            <li className="item">
              <Link href="/privacy">
                <span className="link">Política de Privacidade</span>
              </Link>
            </li>

            <li className="item">
              <a href="mailto:ritoplzteam@gmail.com">
                <span className="link">ritoplzteam@gmail.com</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <style jsx>{`
        .footer {
          padding-top: 20px;
          padding-bottom: 20px;
        }

        .row {
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
          display: flex;
          justify-content: space-between;
          flexWrap: wrap;
        }

        .copyright {
          color: #666;
          font-size: 14px;
        }

        .item {
          display: inline-block;
          border-right: 1px solid #ededed;
          vertical-align: middle;
          margin-right: 15px;
          height: 20px;
          line-height: 20px;
          paddingRight: 15px;
        }

        .link {
          color: #666;
          text-decoration: none;
          font-size: 12px;
          transition: all .2s ease;
        }
      `}</style>
    </footer>
  )
}
