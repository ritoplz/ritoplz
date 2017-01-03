'use strict'

import React from 'react'
import Link from 'next/link'

import Meta from '../components/meta'

export default () => (
  <main>
    <Meta />

    <header>
      <Link href="/login">Login</Link>
      <Link href="/signup">Sign Up</Link>
    </header>

    <h1>Landing Page</h1>
    <h2>Ritoplz 0.0.4</h2>
  </main>
)
