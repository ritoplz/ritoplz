'use strict'

require('babel-register')

global.document = require('jsdom').jsdom('<body></body>')

global.window = document.defaultView
global.navigator = window.navigator
