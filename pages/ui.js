'use strict'

import Page from './../layouts/page'
import { Row, Fieldset } from './../components/ui'

const Ui = () => (
  <Page>
    <Row>
      <section>
        <h1>Ritoplz UI components</h1>

        <div>
          <h2>Fieldset</h2>

          <Fieldset title="Username" description="Nice" />
        </div>
      </section>
    </Row>
  </Page>
)

export default Ui
