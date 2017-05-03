'use strict'

import PropTypes from 'prop-types'

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

Row.propTypes = {
  children: PropTypes.element.isRequired
}

export default Row
