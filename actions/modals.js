'use strict'

import * as types from './../constants'

function openModal (modal) {
  return {
    type: types.OPEN_MODAL,
    modal
  }
}

export default openModal
