'use strict'

import React from 'react'
import Link from 'next/link'

export default props => {
  const navItems = props.items.map((item, i) => {
    return (
      <li className="navItem" key={i}>
        <Link href={item.link}>
          <span className="navLink">{item.name}</span>
        </Link>
      </li>
    )
  })

  return (
    <header className="header">
      <div className="row">
        <Link href="/">
          <h1 className="logo">
            <span className="link">Ritoplz</span>
          </h1>
        </Link>

        <ul className="nav">
          {navItems}
        </ul>
      </div>

      <style jsx>{`
        .row {
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .header {
          height: 70px;
        }

        .logo {
          float: left;
          font-size: 2rem;
          font-weight: 700;
        }

        .link {
          color: #333;
          text-decoration: none;
          line-height: 70px;
        }

        .nav {
          line-height: 70px;
          float: right;
        }

        .navItem {
          display: inline-block;
          margin-left: 30px;
        }

        .navLink {
          color: #ccc;
          font-size: 1rem;
          font-weight: 400;
          transition: .25s;
          display: inline-block;
        }

        .btn {
          color: #fff;
          border: none;
          border-radius: 5px;
          padding: 10px 25px;
          font-size: .9rem;
          font-weight: 500;
          cursor: pointer;
          background: linear-gradient(to right, #52bdab 0%,#6BB6D6 100%);
          text-decoration: none;
        }
      `}</style>
    </header>
  )
}
