'use strict'

/* eslint-env jest */

import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import SocialButton from '../../components/ui/social-button'

describe('ui social-button component', () => {
  it('should render facebook button with only children props', () => {
    const wrapper = shallow(<SocialButton href="/">Button</SocialButton>)
    expect(wrapper.find('a').hasClass('facebook')).toEqual(true)
  })

  it('should have class twitter', () => {
    const wrapper = shallow(
      <SocialButton href="/" ui="twitter">Button</SocialButton>
    )
    expect(wrapper.find('a').hasClass('twitter')).toEqual(true)
  })

  it('should have href passed', () => {
    const wrapper = shallow(<SocialButton href="/">Button</SocialButton>)
    expect(wrapper.find('Link').props().href).toEqual('/')
  })

  it('should have style undefined', () => {
    const wrapper = shallow(<SocialButton href="/">Button</SocialButton>)
    expect(wrapper.find('a').props().style).toBeUndefined()
  })

  describe('snapshots', () => {
    it('should render primary button with only children props', () => {
      const tree = renderer
        .create(<SocialButton href="/">Button</SocialButton>)
        .toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('should render facebook button', () => {
      const tree = renderer
        .create(<SocialButton href="/" ui="facebook">Button</SocialButton>)
        .toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('should render twitter button', () => {
      const tree = renderer
        .create(<SocialButton href="/" ui="twitter">Button</SocialButton>)
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
