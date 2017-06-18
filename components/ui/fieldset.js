'use strict'

import PropTypes from 'prop-types'
import { colors, typography, phone } from './theme'
import { Badge } from './'

const Fieldset = ({ title, description, badge, type, children }) => {
  let hasBadge

  if (badge) {
    hasBadge = <Badge type={type}>{badge}</Badge>
  }

  return (
    <div className="fieldset">
      <div className="fielset-group--left">
        <h4>{title} {hasBadge}</h4>
        <p>{description}</p>
      </div>

      <div className="fielset-group--right">
        {children}
      </div>

      <style jsx>{`
        .fieldset {
          border: none;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          padding-bottom: 50px;
          margin-bottom: 50px;
          border-bottom: 1px solid ${colors.border};
        }

        .fielset-group--left {
          flex-basis: 40%;
          max-width: 100%;
        }

        .fielset-group--right {
          flex-basis: 50%;
          max-width: 100%;
        }

        h4 {
          color: ${colors.heading};
          font-weight: 500;
          font-size: ${typography.f16};
        }

        p {
          color: ${colors.gray};
          font-size: ${typography.f14};
          margin-top: 10px;
          line-height: 24px;
        }

        @media ${phone} {
          .fielset-group--left {
            flex-basis: 100%;
            margin-bottom: 20px;
          }

          .fielset-group--right {
            flex-basis: 100%;
          }
        }
      `}</style>
    </div>
  )
}

Fieldset.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  badge: PropTypes.string,
  children: PropTypes.node.isRequired,
  placeholder: PropTypes.string
}

export default Fieldset
