'use strict'

import React from 'react'
import {
  UiButton
} from '../components/ui'

const Ui = () => {
  return (
    <section>
      <h2>Ui Button</h2>
      <UiButton ui="primary">primary</UiButton>
      <UiButton ui="success">success</UiButton>
      <UiButton ui="danger">danger</UiButton>
      <UiButton ui="default">default</UiButton>

      <UiButton ui="primary outline">primary outline</UiButton>
      <UiButton ui="success outline">success outline</UiButton>
      <UiButton ui="danger outline">danger outline</UiButton>
      <UiButton ui="default outline">default outline</UiButton>

      <UiButton ui="primary small">small</UiButton>
      <UiButton ui="primary large">large</UiButton>

      <UiButton ui="primary" type="submit">Button</UiButton>
      <UiButton ui="primary" type="button">Input</UiButton>
      <UiButton ui="primary" type="submit">Submit</UiButton>
      <UiButton ui="primary" type="reset">Reset</UiButton>
    </section>
  )
}

export default Ui
