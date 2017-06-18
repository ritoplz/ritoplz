'use strict'

import PropTypes from 'prop-types'

import { colors, typography } from './ui/theme'

const LegalText = ({ children }) => (
  <p>
    {children}

    <style jsx>{`
      p {
        font-size: ${typography.f14};
        color: ${colors.gray};
        line-height: 1.5rem;
        margin-bottom: 25px;
      }
    `}</style>
  </p>
)

LegalText.propTypes = {
  children: PropTypes.node.isRequired
}

export default LegalText
