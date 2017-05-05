'use strict'

import PropTypes from 'prop-types'

import { colors, typography } from './ui/theme'

const LegalHeading = ({ children }) => (
  <h4>
    {children}

    <style jsx>{`
      h4 {
        font-weight: 600;
        font-size: ${typography.f18};
        color: ${colors.grayDark};
        margin-bottom: 10px;
      }
    `}</style>
  </h4>
)

LegalHeading.propTypes = {
  children: PropTypes.node.isRequired
}

export default LegalHeading
