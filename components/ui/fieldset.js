'use strict'

import PropTypes from 'prop-types'
import { TextInput } from './'

const Fieldset = ({ title, description, type, label, placeholder }) => (
  <div className="fieldset">
    <div className="fielset-group">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>

    <div className="fielset-group">
      <TextInput label={label || title} type={type} placeholder={placeholder} />
    </div>

    <style jsx>{`
      .fieldset {
        border: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }

      .fielset-group {
        flex-basis: 50%;
      }
    `}</style>
  </div>
)

Fieldset.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string
}

export default Fieldset
