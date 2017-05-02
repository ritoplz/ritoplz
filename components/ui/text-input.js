'use strict'

import { colors } from './theme'

const TextInput = ({ type = 'text', label = null, placeholder = null }) => (
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
        font-weight: 600;
        font-size: .8rem;
        margin-bottom: 5px;
      }

      input {
        width: 100%;
        background-color: #FBFBFD;
        padding: 10px;
        border: 1px solid #E6E8F1;
        font-size: 1rem;
        color: ${colors.secondary};
      }
    `}</style>
  </div>
)

export default TextInput
