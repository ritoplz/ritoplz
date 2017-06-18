'use strict'

import { translate } from 'react-i18next'
import PropTypes from 'prop-types'

import { colors, typography, phone } from './../components/ui/theme'
import { Badge } from './../components/ui'
import { TrashIcon } from './../components/icons'

const SummonersActive = ({ summoners, deleteSummoner, t }) => {
  let activeSummoners

  if (summoners.length > 0) {
    activeSummoners = summoners.map(summoner => {
      const { name, rankedSolo, _id } = summoner

      return (
        <li key={_id}>
          <img
            src={`https://avatar.leagueoflegends.com/BR/${name}.png`}
            alt={name}
          />

          <div>
            <h4>{name}</h4>
            <span>
              {rankedSolo.tier || 'UNRANKED'} {rankedSolo.division || ''}
            </span>
          </div>

          <span className="delete-summoner" onClick={() => deleteSummoner(_id)}>
            <TrashIcon />
          </span>

          <Badge type="primary">{t('confirmed')}</Badge>

          <style jsx>{`
            li {
              box-shadow: 0 10px 30px rgba(50, 50, 93, .05), 0 5px 12px rgba(0, 0, 0, .05);
              border-radius: 6px;
              display: flex;
              padding: 15px;
              margin-bottom: 20px;
              align-items: center;
              transition: .15s ease-in-out;
            }

            li:hover {
              transform: translateY(-5px);
            }

            li:hover .delete-summoner {
              display: block;
            }

            img {
              width: 50px;
              height: 50px;
              border-radius: 6px;
              margin-right: 15px;
            }

            div {
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

            .delete-summoner {
              margin-right: 20px;
              cursor: pointer;
              display: none;
            }
          `}</style>
        </li>
      )
    })
  }

  return (
    <ul>
      {activeSummoners}

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

SummonersActive.propTypes = {
  summoners: PropTypes.array,
  deleteSummoner: PropTypes.func.isRequired,
  t: PropTypes.func
}

export default translate(['common'])(SummonersActive)
