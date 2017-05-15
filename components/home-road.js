'use strict'

import { UiLink } from './../components/ui'
import { colors, typography, phone } from './../components/ui/theme'

const Road = () => (
  <section>
    <div>
      <h2>Road to the top</h2>
      <p>See how is the best of your region and compete against.</p>

      <UiLink href="/rankings">See your Ranking</UiLink>
    </div>

    <div>
      <img src="static/ranking.png" alt="" />
    </div>

    <style jsx>{`
      section {
        display: flex;
        padding-bottom: 50px;
        flex-wrap: wrap;
      }

      div {
        flex-basis: 50%;
      }

      h2 {
        font-size: 3rem;
        color: ${colors.heading};
        padding-top: 75px;
      }

      p {
        font-size: ${typography.f18};
        margin-top: 10px;
        color: ${colors.gray};
        line-height: 2rem;
        margin-bottom: 50px;
      }

      @media ${phone} {
        div {
          flex-basis: 100%;
        }

        div + div {
          margin-top: 60px;
        }
      }
    `}</style>
  </section>
)

export default Road
