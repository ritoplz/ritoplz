'use strict'

import PropTypes from 'prop-types'
import { typography, colors } from './theme'

const Badge = ({ children, type = 'primary' }) => (
  <div className={type}>
    {children}

    <style jsx>{`
      div {
        font-weight: 600;
        border-radius: 2px;
        padding: 4px 10px;
        font-size: ${typography.f10};
        display: inline-block;
        vertical-align: middle;
        margin-left: 3px;
        color: ${colors.white};
        text-transform: uppercase;
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
  children: PropTypes.element.isRequired,
  type: PropTypes.string
}

export default Badge
