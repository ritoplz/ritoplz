'use strict'

import React from 'react'
import Link from 'next/link'
import { style } from 'next/css'

const styles = {
  row: {
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  footer: {
    height: '120px',
    background: 'linear-gradient(to right, #52bdab 0%,#6BB6D6 100%)',
  }
}

export default props => {
  return (
    <footer>
      <div className="row">
        <Link href="/">Ritoplz</Link>

        <ul>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>

          <li>
            <Link href="/terms">Terms</Link>
          </li>

          <li>
            <Link href="https://twitter.com">Twitter</Link>
          </li>

          <li>
            <Link href="https//github.com">Github</Link>
          </li>

          <li>
            <Link href="mailto:ritoplz@gmail.com">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
