'use strict'

/* eslint-env jest */

import renderer from 'react-test-renderer'

import UiLink from '../../components/ui/ui-link'

describe('ui ui-link component', () => {
  describe('snapshots', () => {
    it('should render ui-link', () => {
      const tree = renderer.create(<UiLink href="/">Link</UiLink>).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
