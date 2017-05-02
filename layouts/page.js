'use strict'

import Progress from 'nprogress'
import Head from 'next/head'
import Router from 'next/router'
import PropTypes from 'prop-types'

import pkg from './../package'
import colors from './../components/ui/theme'

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
  <main>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, user-scalable=no"
      />
    </Head>

    {children}

    <style jsx global>{`
      * {
        padding: 0;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        font-family: 'Helvetica Neue', sans-serif;
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
        opacity: 1.0;
        transform: rotate(3deg) translate(0px, -4px);
      }
    `}</style>
  </main>
)

Page.propTypes = {
  children: PropTypes.node.isRequired
}

export default Page
