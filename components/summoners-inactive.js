'use strict'

import { translate } from 'react-i18next'
import PropTypes from 'prop-types'

import { UiButton } from './../components/ui'
import { colors, typography, phone } from './../components/ui/theme'

const SummonersInactive = ({ summoners, confirmSummoner, t }) => {
  let inactiveSummoners

  if (summoners.length > 0) {
    inactiveSummoners = summoners.map(summoner => {
      const { name, code } = summoner

      return (
        <li key={code}>
          <div className="info">
            <h4>{name}</h4>
            <span>{t('Code')}: {code}</span>
          </div>

          <div onClick={() => confirmSummoner(summoner)}>
            <UiButton ui="success small">{t('Confirm summoner')}</UiButton>
          </div>

          <style jsx>{`
            li {
              box-shadow: 0 10px 30px rgba(50, 50, 93, .05), 0 5px 12px rgba(0, 0, 0, .05);
              border-radius: 6px;
              display: flex;
              padding: 15px;
              min-height: 80px;
              margin-bottom: 20px;
              align-items: center;
            }

            .info {
              flex-basis: calc(100% - 65px);
            }

            h4 {
              font-size: ${typography.f16};
              font-weight: 600;
              color: ${colors.heading};
            }

            span {
              font-size: ${typography.f12};
              font-weight: 500;
              color: ${colors.gray};
            }
          `}</style>
        </li>
      )
    })
  }

  return (
    <ul>
      {inactiveSummoners}

      <style jsx>{`
        ul {
          flex-basis: 48%;
        }

        @media ${phone} {
          ul {
            flex-basis: 100%;
          }
        }
      `}</style>
    </ul>
  )
}

SummonersInactive.propTypes = {
  summoners: PropTypes.array,
  confirmSummoner: PropTypes.func.isRequired,
  t: PropTypes.func
}

export default translate(['common'])(SummonersInactive)
