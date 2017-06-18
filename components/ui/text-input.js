'use strict'

import PropTypes from 'prop-types'
import { colors, typography } from './theme'

const TextInput = ({
  type = 'text',
  name,
  label,
  placeholder,
  inputRef,
  inputValue,
  hint,
  handleInputChange
}) => {
  const onInputChange = value => {
    if (handleInputChange) {
      return handleInputChange(value)
    }
  }

  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        ref={inputRef}
        value={inputValue}
        onChange={value => onInputChange(value)}
      />
      <span>{hint}</span>

      <style jsx>{`
        div {
          margin-bottom: 30px;
        }

        span {
          display: block;
          color: ${colors.gray};
          font-weight: 500;
          font-size: ${typography.f12};
          margin-top: 10px;
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
}

TextInput.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  inputRef: PropTypes.func,
  name: PropTypes.string,
  hint: PropTypes.string,
  inputValue: PropTypes.string,
  handleInputChange: PropTypes.func
}

export default TextInput
