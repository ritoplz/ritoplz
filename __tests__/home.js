'use strict'

import test from 'ava'
import React from 'react'
import { shallow, mount } from 'enzyme'

import Home from '../pages/index'

test('shallow', t => {
  const wrapper = shallow(<Home/>)

  t.is(wrapper.contains(<h1>Landing Page</h1>), true)
})
