'use strict'

import test from 'ava'

import openModalReducer from '../reducers/open-modal'
import openModalAction from '../actions/open-modal'

test('reducer modal', t => {
  const state = [{name: 'Add Summoners', open: false}, {name: 'Add Location', open: false}]
  const index = 0
  const action = {type: 'OPEN_MODAL', index}
  const data = openModalReducer(state, action)

  t.is(data[index].open, true)
})

test('action modal', t => {
  const index = 1
  const expectedAction = {type: 'OPEN_MODAL', index}

  t.deepEqual(openModalAction(index), expectedAction)
})
