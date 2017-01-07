'use strict'

import React from 'react'
import Head from 'next/head'
import { insertRule } from 'next/css'

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="description" content="The first worldwide League of Legends Rankings. See who’s the best player of your region." />
      <meta name="keywords" content="league of legends, lol, LOL, League, of, Legends, Rankings, ritoplz, Ritoplz, summoner, summoners, platinum, bronze, silver, lp" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ritoplzrankings" />
      <meta name="twitter:creator" content="@ritoplzrankings" />
      <meta name="twitter:title" content="Ritoplz" />
      <meta name="twitter:description" content="The first worldwide League of Legends Rankings. See who’s the best player of your region." />
      <meta property="twitter:image:src" content="static/cover.png" />

      <meta property="og:url" content="http://ritoplz.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Ritoplz" />
      <meta property="og:image" content="static/cover.png" />
      <meta property="og:description" content="The first worldwide League of Legends Rankings. See who’s the best player of your region." />
      <meta property="og:site_name" content="Ritoplz" />

      <link rel="stylesheet" href="/static/stylesheets/vendors/alert/alert.css"/>
      <link rel="stylesheet" href="https://unpkg.com/react-select/dist/react-select.css"/>
      <link rel="stylesheet" href="/static/stylesheets/vendors/react-select/react-select.css"/>
    </Head>
  </div>
)

insertRule('* {padding: 0; margin: 0; box-sizing: border-box; font-family: Source Sans Pro, Helvetica Neue, Helvetica } li { list-style: none } a { text-decoration: none}')
