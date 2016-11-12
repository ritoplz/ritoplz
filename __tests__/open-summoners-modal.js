'use strict'

import test from 'ava'

import openSummonersModal from '../actions/open-summoners-modal'

test('open summoners modal', t => {
  const index = 1
  const expectedAction = {type: 'OPEN_SUMMONERS_MODAL', index}

  t.deepEqual(openSummonersModal(index), expectedAction)
})
