'use strict'

import { UiButton } from './'

const FormControl = () => (
  <div className="form-control">
    <UiButton ui="link default">Cancel</UiButton>
    <UiButton ui="success">Save settings</UiButton>

    <style jsx>{`
      .form-control {
        display: flex;
        justify-content: flex-end;
      }
    `}</style>
  </div>
)

export default FormControl
