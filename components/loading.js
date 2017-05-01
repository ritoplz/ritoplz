'use strict'

import React from 'react'

export default () => (
  <h1 className="loading">
    Carregando...

    <style jsx>{`
      .loading: {
        font-weight: 100;
        text-align: center;
        height: calc(100vh - 200px);
        line-height: 70vh;
        color: #333;
      }
    `}</style>
  </h1>
)
