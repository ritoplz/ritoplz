'use strict'

const webpack = require('webpack')

const USE_PREFETCH = process.env.NODE_ENV !== 'test'

module.exports = {
  webpack(cfg) {
    if (cfg.resolve.alias) {
      delete cfg.resolve.alias['react']
      delete cfg.resolve.alias['react-dom']
    }

    cfg.plugins.push(
      new webpack.DefinePlugin({
        'process.env.USE_PREFETCH': JSON.stringify(USE_PREFETCH)
      })
    )

    cfg.plugins = cfg.plugins.filter(
      plugin => plugin.constructor.name !== 'UglifyJsPlugin'
    )

    return cfg
  }
}
