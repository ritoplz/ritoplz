'use strict'

import React from 'react'
import Head from 'next/head'
import { insertRule } from 'next/css'

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="/static/stylesheets/vendors/alert/alert.css"/>
      <link rel="stylesheet" href="https://unpkg.com/react-select/dist/react-select.css"/>
      <link rel="stylesheet" href="/static/stylesheets/vendors/react-select/react-select.css"/>
    </Head>
  </div>
)

insertRule('* {padding: 0; margin: 0; box-sizing: border-box; font-family: Source Sans Pro, Helvetica Neue, Helvetica } li { list-style: none } a { text-decoration: none}')
