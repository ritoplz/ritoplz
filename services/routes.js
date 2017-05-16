'use strict'

const UrlPrettifier = require('next-url-prettifier').default

const routes = [
  {
    page: 'player',
    prettyUrl: ({ name = '' }) => `/player/${name}`,
    prettyUrlPatterns: [{ pattern: '/player/:name' }]
  }
]

const urlPrettifier = new UrlPrettifier(routes)

exports.default = routes
exports.Router = urlPrettifier
