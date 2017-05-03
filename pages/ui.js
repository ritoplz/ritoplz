'use strict'

import Page from './../layouts/page'
import { Row, UiSelect } from './../components/ui'

const options = [
  { value: 'sp', label: 'São Paulo' },
  { value: 'rj', label: 'Rio de Janeiro' },
  { value: 'cwb', label: 'Curitiba' }
]

const Ui = () => (
  <Page>
    <Row>
      <section>
        <h1>Ritoplz UI components</h1>

        <div>
          <h2>Select</h2>

          <UiSelect
            placeholder="Select item"
            options={options}
            handleSelectChange={value => console.log(value)}
          />
        </div>
      </section>
    </Row>
  </Page>
)

export default Ui
