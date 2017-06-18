'use strict'

import PropTypes from 'prop-types'
import { tablet, phone } from './theme'

const Row = ({ children }) => (
  <div className="row">
    {children}

    <style jsx>{`
      .row {
        max-width: 900px;
        margin-left: auto;
        margin-right: auto;
      }

      @media ${tablet} {
        .row {
          padding-left: 50px;
          padding-right: 50px;
        }
      }

      @media ${phone} {
        .row {
          padding-left: 25px;
          padding-right: 25px;
        }
      }
    `}</style>
  </div>
)

Row.propTypes = {
  children: PropTypes.node.isRequired
}

export default Row
