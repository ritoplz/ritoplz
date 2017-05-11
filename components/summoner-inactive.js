'use strict'

import PropTypes from 'prop-types'
import { UiButton } from './../components/ui'
import { colors, typography } from './../components/ui/theme'

const SummonerInactive = ({ summoner, confirmSummoner }) => (
  <div className="summoner">
    <div>
      <h3 className="summoner__name">{summoner.name}</h3>
      <p className="summoner__code">Code: {summoner.code}</p>
    </div>

    <div>
      <UiButton
        ui="success block small"
        onBtnClick={() => confirmSummoner(summoner)}
      >
        Confirm summoner
      </UiButton>
    </div>

    <style jsx>{`
      .summoner {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .summoner__name {
        font-size: ${typography.f18};
        font-weight: 600;
        color: ${colors.heading};
        margin-bottom: 2px;
        flex-basis: 40%;
      }

      .summoner__code {
        font-size: ${typography.f14};
        font-weight: 600;
        color: ${colors.gray};
        flex-basis: 40%;
      }
    `}</style>
  </div>
)

SummonerInactive.propTypes = {
  summoner: PropTypes.object,
  confirmSummoner: PropTypes.func.isRequired
}

export default SummonerInactive
