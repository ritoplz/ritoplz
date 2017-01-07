'use strict'

import React from 'react'
import Link from 'next/link'

import Meta from '../components/meta'
import Header from '../components/header'
import Footer from '../components/footer'

export default () => {
  const items = [
    {name: 'Rankings', link: 'rankings', type: 'item'},
    {name: 'FAQ', link: 'faq', type: 'item'},
    {name: 'Login', link: 'login', type: 'button'}
  ]

  return (
    <main>
      <Meta />

      <Header items={items} />

      <h1>Landing Page</h1>
      <h2>Ritoplz 0.0.4</h2>

      <Footer />
    </main>
  )
}
