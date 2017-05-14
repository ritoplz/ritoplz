'use strict'

/* eslint-env jest */

import renderer from 'react-test-renderer'

import Notify from '../../components/ui/notify'

describe('ui notify component', () => {
  describe('snapshots', () => {
    it('should render notify', () => {
      const tree = renderer.create(<Notify />).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
