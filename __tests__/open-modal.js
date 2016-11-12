'use strict'

import test from 'ava'

import openModal from '../reducers/open-modal'

test('open modal', t => {
  const state = [{name: "Add Summoners", open: false}, {name: "Add Location", open: false}]
  const index = 0
  const action = {type: 'OPEN_SUMMONERS_MODAL', index}
  const data = openModal(state, action)

  t.is(data[index].open, true)
})
