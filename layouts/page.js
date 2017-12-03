'use strict'

import Progress from 'nprogress'
import Head from 'next/head'
import Router from 'next/router'
import PropTypes from 'prop-types'

import pkg from './../package'
import { colors } from './../theme'

let progress

const stopProgress = () => {
  clearTimeout(progress)
  Progress.done()
}

Router.onRouteChangeStart = () => {
  progress = setTimeout(Progress.start, 200)
}

Router.onRouteChangeComplete = stopProgress
Router.onRouteChangeError = stopProgress

if (global.document) {
  const info = [
    `${pkg.name} v${pkg.version}`,
    `${pkg.description}`,
    `Find the code here: ${pkg.repository.url}`
  ]

  for (const message of info) {
    console.log(message)
  }
}

const Page = ({ children }) => (
  <div>
    <Head>
      <title>Ritoplz - Worldwide League of Legends Rankings</title>

      <link rel="manifest" href="static/manifest.json" />
      <meta name="theme-color" content="#317EFB" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="description" content={pkg.description} />
      <meta name="keywords" content={pkg.keywords} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ritoplzrankings" />
      <meta name="twitter:creator" content="@ritoplzrankings" />
      <meta name="twitter:title" content="Ritoplz" />
      <meta
        name="twitter:description"
        content="Worldwide Rankings for League of Legends. See who's the best player in your region."
      />
      <meta
        property="twitter:image:src"
        content="https://ritoplz.com/static/cover.png"
      />

      <meta property="og:url" content="http://ritoplz.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Ritoplz" />
      <meta property="og:image" content="static/cover.png" />
      <meta
        property="og:description"
        content="Worldwide Rankings for League of Legends. See who's the best player in your region."
      />
      <meta property="og:site_name" content="Ritoplz" />

      <script src="static/drift.js" />
      <script src="static/analytics.js" />
      <script src="static/heatmaps.js" />

      <link rel="shortcut icon" href="static/favicon.png" type="image/x-icon" />
      <link rel="icon" href="static/favicon.png" type="image/x-icon" />
    </Head>

    <main>{children}</main>

    <style jsx global>{`
      * {
        padding: 0;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
        font-family: 'Fira Sans', 'Helvetica Neue', sans-serif;
      }

      svg {
        vertical-align: middle;
      }

      img {
        max-width: 100%;
      }

      ul,
      li {
        list-style: none;
      }

      a {
        text-decoration: none;
      }

      #nprogress {
        pointer-events: none;
      }

      #nprogress .bar {
        background: ${colors.primary};
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }

      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px ${colors.primary}, 0 0 5px ${colors.primary};
        opacity: 1;
        transform: rotate(3deg) translate(0px, -4px);
      }
    `}</style>
  </div>
)

Page.propTypes = {
  children: PropTypes.node.isRequired
}

export default Page
