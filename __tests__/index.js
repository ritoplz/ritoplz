'use strict'

import test from 'ava'
import React from 'react'
import { shallow, mount } from 'enzyme'

import Index from '../pages/index'

test('shallow', t => {
  const wrapper = shallow(<Index />)
  t.is(wrapper.contains(<h1>Landing Page</h1>), true)
})
