'use strict'

import { translate } from 'react-i18next'
import PropTypes from 'prop-types'

import { colors, typography, phone } from './../components/ui/theme'

const Stats = ({ info, t }) => {
  return (
    <div>
      <header className="header">
        <div className="header-box">
          <div>
            <h5 className="header-box__title">
              {info.rankedSolo.wins || 'Unranked'}
            </h5>
            <span className="header-box__subtitle">{t('Wins')}</span>
          </div>
        </div>

        <div className="header-box">
          <div>
            <h5 className="header-box__title">
              {info.rankedSolo.losses || 'Unranked'}
            </h5>
            <span className="header-box__subtitle">{t('Losses')}</span>
          </div>
        </div>
      </header>

      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          margin-top: 30px;
        }

        .header-box {
          flex-basis: calc(50% - 15px);
          box-shadow: 0 10px 30px rgba(50, 50, 93, .05), 0 5px 12px rgba(0, 0, 0, .05);
          border-radius: 6px;
          padding: 40px 15px;
          display: flex;
          align-items: center;
        }

        .header-box div {
          text-align: center;
          width: 100%;
        }

        .header-box__title {
          font-size: ${typography.f30};
          font-weight: 600;
          color: ${colors.grayDark};
          margin-bottom: 10px;
        }

        .header-box__subtitle {
          font-size: ${typography.f14};
          font-weight: 400;
          display: block;
          color: ${colors.grayDark};
        }

        @media ${phone} {
          .header-box {
            flex-basis: 100%;
          }
        }
      `}</style>
    </div>
  )
}

Stats.propTypes = {
  info: PropTypes.object,
  t: PropTypes.func
}

export default translate(['common'])(Stats)
