'use strict'

/* eslint-env jest */

import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import Row from '../../components/ui/row'

describe('ui row component', () => {
  it('should have children props passed', () => {
    const wrapper = shallow(<Row><h1>Nice</h1></Row>)
    expect(wrapper.find('div').props().children[0]).toEqual(<h1>Nice</h1>)
  })

  describe('snapshots', () => {
    it('should render row', () => {
      const tree = renderer.create(<Row>Nice</Row>).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
