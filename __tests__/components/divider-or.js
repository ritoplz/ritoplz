'use strict'

/* eslint-env jest */

import renderer from 'react-test-renderer'

import DividerOr from '../../components/ui/divider-or'

describe('ui divider-or component', () => {
  describe('snapshots', () => {
    it('should render divider-or', () => {
      const tree = renderer.create(<DividerOr />).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
