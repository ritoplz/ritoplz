'use strict'

import { UiButton, UiLink } from './'

const FormControl = () => (
  <div className="form-control">
    <UiLink prefetch href="/dashboard" ui="link default">Cancel</UiLink>
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
