'use strict'

const UrlPrettifier = require('next-url-prettifier').default

const routes = [
  {
    page: 'profile',
    prettyUrl: ({ username = '' }) => `/profile/${username}`,
    prettyUrlPatterns: [{ pattern: '/profile/:username' }]
  }
]

const urlPrettifier = new UrlPrettifier(routes)

module.exports = urlPrettifier
