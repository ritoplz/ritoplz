'use strict'

import PropTypes from 'prop-types'
import { colors } from './theme'

const UiButton = ({ children, type = 'button', ui = 'primary' }) => (
  <button type={type} className={ui}>
    {children}

    <style jsx>{`
      button {
        display: inline-block;
        font-weight: 400;
        line-height: 1.25;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        user-select: none;
        border: 1px solid transparent;
        padding: .5rem 1rem;
        font-size: 1rem;
        border-radius: .25rem;
        transition: all .2s ease-in-out;
        cursor: pointer;
      }

      .primary {
        background-color: ${colors.primary};
        color: ${colors.white};
      }

      .success {
        background-color: ${colors.success};
        color: ${colors.white};
      }

      .danger {
        background-color: ${colors.danger};
        color: ${colors.white};
      }

      .default {
        background-color: ${colors.gray};
      }

      .outline {
        background-color: transparent;
      }

      .outline.primary {
        border-color: ${colors.primary};
        color: ${colors.primary};
      }

      .outline.success {
        border-color: ${colors.success};
        color: ${colors.success};
      }

      .outline.danger {
        border-color: ${colors.danger};
        color: ${colors.danger};
      }

      .outline.default {
        border-color: ${colors.gray};
        color: ${colors.gray};
      }

      .link {
        background-color: transparent;
        color: ${colors.primary};
      }

      .small {
        font-size: 0.875rem;
        padding: 0.25rem 0.5rem;
        border-radius: 0.2rem;
      }

      .large {
        font-size: 1.25rem;
        padding: 0.75rem 1.5rem;
        border-radius: 0.3rem;
      }
    `}</style>
  </button>
)

UiButton.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
  ui: PropTypes.string,
  type: PropTypes.string
}

export default UiButton
