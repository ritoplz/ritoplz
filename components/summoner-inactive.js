'use strict'

import PropTypes from 'prop-types'
import { UiButton } from './../components/ui'
import { colors, typography } from './../components/ui/theme'

const style = {
  marginTop: '20px'
}

const SummonerInactive = ({ summoner }) => (
  <div>
    <div className="summoner-status">
      <h3 className="summoner__name">{summoner.name}</h3>
      <p className="summoner__code">Code: {summoner.code}</p>

      <UiButton ui="success block small" customStyle={style}>
        Confirm summoner
      </UiButton>
    </div>

    <style jsx>{`
      .summoner__name {
        font-size: ${typography.f20};
        font-weight: 600;
        color: ${colors.heading};
        margin-bottom: 2px;
      }

      .summoner__code {
        font-size: ${typography.f14};
        padding: 8px 2px;
        border-radius: 4px;
        margin: 10px auto 20px;
        font-weight: 600;
        color: ${colors.gray};
        border: 1px solid ${colors.border};
        width: 100px;
      }

      .summoner-status {
        display: block;
        margin-top: 15px;
      }
    `}</style>
  </div>
)

SummonerInactive.propTypes = {
  summoner: PropTypes.object
}

export default SummonerInactive
