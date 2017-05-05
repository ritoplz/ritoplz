'use strict'

import PropTypes from 'prop-types'

import { colors, typography } from './ui/theme'

const LegalTitle = ({ title, date }) => (
  <div>
    <h2>{title}</h2>
    <p>Last update: {date}</p>

    <style jsx>{`
      div {
        text-align: center;
        padding-top: 75px;
        padding-bottom: 75px;
      }

      h2 {
        font-size: ${typography.f30};
        font-weight: 500;
        color: ${colors.heading};
        margin-bottom: 5px;
      }

      p {
        color: ${colors.gray};
        font-size: ${typography.f16};
      }
    `}</style>
  </div>
)

LegalTitle.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

export default LegalTitle
