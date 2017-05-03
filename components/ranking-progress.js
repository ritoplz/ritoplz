'use strict'

import { Line } from 'rc-progress'
import PropTypes from 'prop-types'
import { colors, typography } from './../components/ui/theme'

const RankingProgress = ({ ranking }) => {
  let userLp
  if (ranking.tier === 'CHALLENGER' || ranking.tier === 'MASTER') {
    userLp = 100
  } else {
    userLp = ranking.lp
  }

  return (
    <div className="ranking-progress">
      <div className="ranking-tier">
        <span className="ranking-tier__division">
          {ranking.tier} {ranking.division}
        </span>
        <span className="ranking-tier__lp">LP {ranking.lp}</span>
      </div>

      <Line
        percent={userLp}
        strokeWidth="1.25"
        strokeColor={colors.success}
        trailWidth="1.25"
        trailColor={colors.border}
      />

      <style jsx>{`
        .ranking-progress {
          flex-basis: 45%;
        }

        .ranking-tier {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .ranking-tier__division {
          color: ${colors.gray};
          font-weight: 600;
          font-size: ${typography.f12};
        }

        .ranking-tier__lp {
          color: ${colors.gray};
          font-weight: 600;
          font-size: ${typography.f12};
        }
      `}</style>
    </div>
  )
}

RankingProgress.propTypes = {
  ranking: PropTypes.object
}

export default RankingProgress
