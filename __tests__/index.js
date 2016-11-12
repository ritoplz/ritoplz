'use strict'

import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import Link from 'next/link'

import Index from '../pages/index'

jest.mock('react-dom')
jest.mock('next')

test('shallow', t => {
  const wrapper = shallow(<Index/>)
  t.is(wrapper.contains(<h1>Landing Page</h1>), true)
})
