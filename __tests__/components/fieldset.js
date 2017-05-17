'use strict'

/* eslint-env jest */

import renderer from 'react-test-renderer'

import Fieldset from '../../components/ui/fieldset'

describe('ui fieldset component', () => {
  describe('snapshots', () => {
    it('should render fieldset', () => {
      const tree = renderer
        .create(
          <Fieldset title="title" description="description">Fieldset</Fieldset>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
