'use strict'

/* eslint-env jest */

import renderer from 'react-test-renderer'

import FormControl from '../../components/ui/form-control'

describe('ui form-control component', () => {
  describe('snapshots', () => {
    it('should render form-control', () => {
      const tree = renderer.create(<FormControl />).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
