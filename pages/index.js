'use strict'

import React from 'react'
import Link from 'next/link'

export default () => (
  <main>
    <header>
      <Link href="/login">Login</Link>
      <Link href="/signup">Sign Up</Link>
    </header>

    <h1>Landing Page</h1>
  </main>
)
