'use strict'

/* eslint-env jest */

import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import TextInput from '../../components/ui/text-input'

describe('ui text-input component', () => {
  it('should have props type text by default', () => {
    const wrapper = shallow(<TextInput />)
    expect(wrapper.find('input').props().type).toEqual('text')
  })

  it('should have props name undefined', () => {
    const wrapper = shallow(<TextInput />)
    expect(wrapper.find('input').props().name).toBeUndefined()
  })

  it('should have props label empty string', () => {
    const wrapper = shallow(<TextInput />)
    expect(wrapper.find('label').text()).toEqual('')
  })

  it('should have props placeholder undefined', () => {
    const wrapper = shallow(<TextInput />)
    expect(wrapper.find('input').props().placeholder).toBeUndefined()
  })

  it('should have props inputRef undefined', () => {
    const wrapper = shallow(<TextInput />)
    expect(wrapper.find('input').props().inputRef).toBeUndefined()
  })

  it('should have props inputValue undefined', () => {
    const wrapper = shallow(<TextInput />)
    expect(wrapper.find('input').props().inputValue).toBeUndefined()
  })

  it('should have props handleInputChange undefined', () => {
    const wrapper = shallow(<TextInput />)
    expect(wrapper.find('input').props().handleInputChange).toBeUndefined()
  })

  it('should have props name email', () => {
    const wrapper = shallow(<TextInput name="email" />)
    expect(wrapper.find('input').props().name).toEqual('email')
  })

  it('should have props label Email', () => {
    const wrapper = shallow(<TextInput label="Email" />)
    expect(wrapper.find('label').text()).toEqual('Email')
  })

  it('should have props placeholder Email address', () => {
    const wrapper = shallow(<TextInput placeholder="Email address" />)
    expect(wrapper.find('input').props().placeholder).toEqual('Email address')
  })

  describe('snapshots', () => {
    it('should render text input', () => {
      const tree = renderer.create(<TextInput />).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('should render email input', () => {
      const tree = renderer.create(<TextInput type="email" />).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('should render placeholder email', () => {
      const tree = renderer
        .create(<TextInput placeholder="email" type="email" />)
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
