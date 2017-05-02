'use strict'

import PropTypes from 'prop-types'
import colors from './theme'

const Badge = ({ children, type = 'primary' }) => (
  <div className={type}>
    {children}

    <style jsx>{`
      div {
        border-radius: 3px;
        padding: 4px 6px;
        font-size: .8rem;
        display: inline-block;
        vertical-align: middle;
        margin-left: 5px;
        color: ${colors.white};
      }

      .primary {
        background-color: ${colors.primary};
      }

      .success {
        background-color: ${colors.success};
      }

      .danger {
        background-color: ${colors.danger};
      }
    `}</style>
  </div>
)

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string
}

export default Badge
