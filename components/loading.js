'use strict'

import React from 'react'

export default () => (
  <h1 className="loading">
    Carregando...

    <style jsx>{`
      .loading: {
        fontWeight: 100;
        textAlign: center;
        height: calc(100vh - 200px);
        lineHeight: 70vh;
        color: #333;
      }
    `}</style>
  </h1>
)
