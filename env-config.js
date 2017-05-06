'use strict'

const config = require('./config/service')

module.exports = {
  API_URL: config[process.env.NODE_ENV]
}
