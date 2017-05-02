'use strict'

const Row = ({ children }) => (
  <div className="row">
    {children}

    <style jsx>{`
      .row {
        max-width: 900px;
        margin-left: auto;
        margin-right: auto;
      }
    `}</style>
  </div>
)

export default Row
