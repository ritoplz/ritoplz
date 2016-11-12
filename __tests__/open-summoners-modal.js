'use strict'

import test from 'ava'

import openSummonersModal from '../actions/open-summoners-modal'

test('open summoners modal', t => {
  const id = 1
  const expectedAction = {type: 'OPEN_SUMMONERS_MODAL', id}

  t.deepEqual(openSummonersModal(id), expectedAction)
})
