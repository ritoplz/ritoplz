'use strict'

/* eslint-env jest */

import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import UiButton from '../../components/ui/ui-button'

describe('ui ui-button component', () => {
  it('should render asClass button', () => {
    const wrapper = shallow(<UiButton>Button</UiButton>)
    expect(wrapper.hasClass('primary')).toEqual(true)
  })

  it('should have class success', () => {
    const wrapper = shallow(<UiButton ui="success">Button</UiButton>)
    expect(wrapper.hasClass('success')).toEqual(true)
  })

  it('should have class danger', () => {
    const wrapper = shallow(<UiButton ui="danger">Button</UiButton>)
    expect(wrapper.hasClass('danger')).toEqual(true)
  })

  it('should have children props passed', () => {
    const wrapper = shallow(<UiButton>danger button</UiButton>)
    expect(wrapper.find('.primary').props().children[0]).toEqual(
      'danger button'
    )
  })

  it('should have disabled attribute set to false by default', () => {
    const wrapper = shallow(<UiButton>Button</UiButton>)
    expect(wrapper.find('.primary').props().disabled).toBeFalsy()
  })

  it('should be disabled', () => {
    const wrapper = shallow(<UiButton disabled={true}>Button</UiButton>)
    expect(wrapper.find('.primary').props().disabled).toBeTruthy()
  })

  it('should have style undefined', () => {
    const wrapper = shallow(<UiButton>Button</UiButton>)
    expect(wrapper.find('.primary').props().style).toBeUndefined()
  })

  it('should have onClick undefined', () => {
    const wrapper = shallow(<UiButton>Button</UiButton>)
    expect(wrapper.find('.primary').props().onClick).toBeUndefined()
  })

  describe('snapshots', () => {
    it('should render primary button with only children props', () => {
      const tree = renderer.create(<UiButton>Button</UiButton>).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('should render success button', () => {
      const tree = renderer
        .create(<UiButton ui="success">Button</UiButton>)
        .toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('should render danger button', () => {
      const tree = renderer
        .create(<UiButton ui="danger">Button</UiButton>)
        .toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('should render disabled button', () => {
      const tree = renderer
        .create(<UiButton disabled={true}>Button</UiButton>)
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
