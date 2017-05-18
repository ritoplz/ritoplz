'use strict'

const config = require('./config/service')

module.exports = {
  API_URL: config.api[process.env.NODE_ENV],
  I18N_URL: config.i18n[process.env.NODE_ENV]
}
