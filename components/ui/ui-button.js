'use strict'

import PropTypes from 'prop-types'
import { colors, typography } from './theme'

const UiButton = ({
  children,
  type = 'button',
  ui = 'primary',
  disabled = false,
  customStyle
}) => (
  <button type={type} className={ui} disabled={disabled} style={customStyle}>
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
        padding: 13px 30px;
        font-size: ${typography.f16};
        border-radius: 4px;
        transition: all .2s ease-in-out;
        cursor: pointer;
      }

      button:disabled {
        cursor: default;
      }

      .primary {
        background-color: ${colors.primary};
        color: ${colors.white};
      }

      .primary:hover {
        background-color: ${colors.primaryHover};
      }

      .primary:disabled {
        background-color: ${colors.primaryDisabled};
      }

      .success {
        background-color: ${colors.success};
        color: ${colors.white};
      }

      .success:hover {
        background-color: ${colors.successHover};
      }

      .success:disabled {
        background-color: ${colors.successDisabled};
      }

      .danger {
        background-color: ${colors.danger};
        color: ${colors.white};
      }

      .danger:hover {
        background-color: ${colors.dangerHover};
      }

      .danger:disabled {
        background-color: ${colors.dangerDisabled};
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
        border-color: #DADADA;
        color: #CCCCCC;
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
        font-size: ${typography.f14};
        padding: 12px 15px;
        border-radius: 4px;
      }

      .large {
        font-size: 1.25rem;
        padding: 0.75rem 1.5rem;
        border-radius: 6px;
      }

      .block {
        display: block;
        width: 100%;
      }
    `}</style>
  </button>
)

UiButton.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
  ui: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  customStyle: PropTypes.object
}

export default UiButton
