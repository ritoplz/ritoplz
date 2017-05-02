'use strict'

import PropTypes from 'prop-types'
import { colors, typography } from './theme'

const UiButton = ({ children, type = 'button', ui = 'primary' }) => (
  <button type={type} className={ui}>
    {children}

    <style jsx>{`
      button {
        display: inline-block;
        font-weight: 600;
        line-height: 1.25;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        user-select: none;
        border: 1px solid transparent;
        padding: 15px 60px;
        font-size: ${typography.f16};
        border-radius: 4px;
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

      .success:hover {
        background-color: ${colors.successHover};
      }

      .danger {
        background-color: ${colors.danger};
        color: ${colors.white};
      }

      .danger:hover {
        background-color: ${colors.dangerHover};
      }

      .default {
        background-color: ${colors.default};
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

      .link.default {
        color: ${colors.default};
      }

      .link.default:hover {
        color: ${colors.defaultHover};
      }

      .small {
        font-size: 0.875rem;
        padding: 0.25rem 0.5rem;
        border-radius: 2px;
      }

      .large {
        font-size: 1.25rem;
        padding: 0.75rem 1.5rem;
        border-radius: 6px;
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
