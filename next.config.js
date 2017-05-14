module.exports = {
  webpack(cfg) {
    if (cfg.resolve.alias) {
      delete cfg.resolve.alias['react']
      delete cfg.resolve.alias['react-dom']
    }

    cfg.plugins = cfg.plugins.filter(
      plugin => plugin.constructor.name !== 'UglifyJsPlugin'
    )

    return cfg
  }
}
