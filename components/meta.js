'use strict'

import React from 'react'
import Head from 'next/head'
import { insertRule } from 'next/css'

export default () => (
  <div>
    <Head>
      <title>Ritoplz - Worldwide League of Legends Rankings</title>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta charSet="utf-8"/>
      <meta name="description" content="The first worldwide League of Legends Rankings. See who’s the best player of your region."/>
      <meta name="keywords" content="league of legends, lol, LOL, League, of, Legends, Rankings, ritoplz, Ritoplz, summoner, summoners, platinum, bronze, silver, lp"/>

      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:site" content="@ritoplzrankings"/>
      <meta name="twitter:creator" content="@ritoplzrankings"/>
      <meta name="twitter:title" content="Ritoplz"/>
      <meta name="twitter:description" content="The first worldwide League of Legends Rankings. See who’s the best player of your region."/>
      <meta property="twitter:image:src" content="https://ritoplz.com/static/cover.png"/>

      <meta property="og:url" content="http://ritoplz.com"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="Ritoplz"/>
      <meta property="og:image" content="static/cover.png"/>
      <meta property="og:description" content="The first worldwide League of Legends Rankings. See who’s the best player of your region."/>
      <meta property="og:site_name" content="Ritoplz"/>

      <link rel="stylesheet" href="/static/stylesheets/vendors/alert/alert.css"/>
      <link rel="stylesheet" href="https://unpkg.com/react-select/dist/react-select.css"/>
      <link rel="stylesheet" href="/static/stylesheets/vendors/react-select/react-select.css"/>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <script src="static/drift.js"></script>
      <script src="static/analytics.js"></script>

      <link rel="apple-touch-icon" sizes="57x57" href="static/apple-icon-57x57.png"/>
      <link rel="apple-touch-icon" sizes="60x60" href="static/apple-icon-60x60.png"/>
      <link rel="apple-touch-icon" sizes="72x72" href="static/apple-icon-72x72.png"/>
      <link rel="apple-touch-icon" sizes="76x76" href="static/apple-icon-76x76.png"/>
      <link rel="apple-touch-icon" sizes="114x114" href="static/apple-icon-114x114.png"/>
      <link rel="apple-touch-icon" sizes="120x120" href="static/apple-icon-120x120.png"/>
      <link rel="apple-touch-icon" sizes="144x144" href="static/apple-icon-144x144.png"/>
      <link rel="apple-touch-icon" sizes="152x152" href="static/apple-icon-152x152.png"/>
      <link rel="apple-touch-icon" sizes="180x180" href="static/apple-icon-180x180.png"/>
      <link rel="icon" type="image/png" sizes="192x192"  href="static/android-icon-192x192.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="static/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="96x96" href="static/favicon-96x96.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="static/favicon-16x16.png"/>
    </Head>
  </div>
)

insertRule('* {padding: 0; margin: 0; box-sizing: border-box; font-family: Source Sans Pro, Helvetica Neue, Helvetica } li { list-style: none } a { text-decoration: none}')
