'use strict'

import React from 'react'
import { style } from 'next/css'

export default () => (
  <Modal isOpen={false} style={customStyle}>
    <h1>Add Location</h1>
    <p>Etc.</p>
  </Modal>
)

const customStyle = {
  content: {
    left: 475,
    right: 475,
  }
}
