'use strict'

import PropTypes from 'prop-types'
import { colors, typography } from './theme'

const TextInput = ({ type = 'text', label, placeholder }) => (
  <div>
    <label>{label}</label>
    <input type={type} placeholder={placeholder} />

    <style jsx>{`
      div {
        margin-bottom: 30px;
      }

      label {
        display: block;
        color: ${colors.secondary};
        font-weight: 500;
        font-size: ${typography.f12};
        margin-bottom: 8px;
      }

      input {
        width: 100%;
        background-color: ${colors.blueLight};
        border: 1px solid ${colors.inputBorder};
        font-size: ${typography.f14};
        border-radius: 4px;
        padding: 16px 15px;
        color: ${colors.secondary};
      }

      input::-webkit-input-placeholder {
        color: ${colors.gray};
      }

      input::-moz-placeholder {
        color: ${colors.gray};
      }

      input:-ms-input-placeholder {
        color: ${colors.gray};
      }

      input:-moz-placeholder {
        color: ${colors.gray};
      }

      input:focus {
        outline: transparent;
        border-color: ${colors.grayLight};
      }
    `}</style>
  </div>
)

TextInput.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string
}

export default TextInput
