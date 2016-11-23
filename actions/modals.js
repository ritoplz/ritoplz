'use strict'

import * as types from './../constants'

export function openModal (modal) {
  type: types.OPEN_MODAL,
  modal
}

export function closeModal (modal) {
  type: types.CLOSE_MODAL,
  modal
}
