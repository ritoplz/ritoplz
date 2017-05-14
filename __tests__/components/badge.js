'use strict'

/* eslint-env jest */

import { shallow } from 'enzyme'

import Badge from '../../components/ui/badge'

describe('ui badge component', () => {
  it('should have class primary', () => {
    const wrapper = shallow(<Badge type="primary">Button</Badge>)
    expect(wrapper.hasClass('primary')).toEqual(true)
  })

  it('should have class success', () => {
    const wrapper = shallow(<Badge type="success">Button</Badge>)
    expect(wrapper.hasClass('success')).toEqual(true)
  })

  it('should have class danger', () => {
    const wrapper = shallow(<Badge type="danger">Button</Badge>)
    expect(wrapper.hasClass('danger')).toEqual(true)
  })

  it('should have children props passed', () => {
    const wrapper = shallow(<Badge>danger button</Badge>)
    expect(wrapper.find('.primary').props().children[0]).toEqual(
      'danger button'
    )
  })
})
