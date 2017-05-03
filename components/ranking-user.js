'use strict'

import { Line } from 'rc-progress'
import { colors, typography } from './../components/ui/theme'
import { UiButton } from './../components/ui'

const RankingUser = () => (
  <div className="ranking">
    <header className="ranking-header">
      <img
        className="ranking-header__avatar"
        src="https://ddragon.leagueoflegends.com/cdn/7.8.1/img/profileicon/1598.png"
        alt=""
      />

      <div className="ranking-user">
        <h3 className="ranking-user__summoner">Sarah Sheeva</h3>
        <h4 className="ranking-user__username">Pedro Rezende</h4>
      </div>

      <UiButton ui="outline default small">View Profile</UiButton>
    </header>

    <footer className="ranking-footer">
      <span className="ranking-footer__position">#251</span>

      <div className="ranking-progress">
        <div className="ranking-tier">
          <span className="ranking-tier__division">CHALLENGER I</span>
          <span className="ranking-tier__lp">LP 76</span>
        </div>

        <Line
          percent={75}
          strokeWidth="1.25"
          strokeColor={colors.success}
          trailWidth="1.25"
          trailColor={colors.border}
        />
      </div>

      <div className="ranking-info">
        <span className="ranking-info__location">
          Belo Horizonte, Minas Gerais — BR
        </span>
        <span className="ranking-info__play">
          Last time played: <strong>3 hours ago</strong>
        </span>
      </div>
    </footer>

    <style jsx>{`
      .ranking {
        width: 100%;
        background-color: ${colors.white};
        border-radius: 5px;
        box-shadow: 0 1px 6px rgba(0, 0, 0, .1);
        padding-left: 15px;
        padding-right: 15px;
        margin-bottom: 30px;
      }

      .ranking-header {
        display: flex;
        padding-top: 15px;
        padding-bottom: 15px;
        border-bottom: 1px solid ${colors.border};
      }

      .ranking-header__avatar {
        width: 45px;
        height: 45px;
        border-radius: 3px;
        flex-basis: 45px;
        margin-right: 15px;
      }

      .ranking-user {
        flex-basis: 100%;
      }

      .ranking-user__summoner {
        display: block;
        font-weight: 600;
        color: ${colors.heading};
        font-size: ${typography.f18};
        margin-top: 4px;
        margin-bottom: 2px;
      }

      .ranking-user__username {
        color: ${colors.gray};
        display: block;
        font-weight: 500;
        font-size: ${typography.f12};
      }

      .ranking-footer {
        display: flex;
        padding-top: 15px;
        padding-bottom: 15px;
        align-items: center;
      }

      .ranking-footer__position {
        color: ${colors.heading};
        font-size: ${typography.f16};
        font-weight: 700;
        flex-basis: 10%;
      }

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

      .ranking-info {
        text-align: right;
        flex-basis: 45%;
      }

      .ranking-info__location {
        display: block;
        color: #AAA;
        font-size: ${typography.f12};
        font-weight: 500;
        margin-bottom: 3px;
      }

      .ranking-info__play {
        display: block;
        color: #AAA;
        font-size: ${typography.f12};
        font-weight: 500;
      }
    `}</style>
  </div>
)

export default RankingUser
