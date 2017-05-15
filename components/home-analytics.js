'use strict'

import { UiLink } from './../components/ui'
import { colors, typography, phone } from './../components/ui/theme'

const Analytics = () => (
  <section>
    <div>
      <img src="static/analytics.png" alt="" />
    </div>

    <div>
      <h2>Improve your gaming with data</h2>
      <p>
        We provide data for you to understand better you game style and how you are improving.
      </p>

      <UiLink href="/signup">Learn more</UiLink>
    </div>

    <style jsx>{`
      section {
        display: flex;
        padding-bottom: 50px;
        padding-top: 50px;
        flex-wrap: wrap;
      }

      div {
        flex-basis: 50%;
      }

      img {
        margin-left: -62px
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
        section {
          flex-direction: column-reverse;
          padding-top: 0;
        }

        h2 {
          padding-top: 0;
        }

        div {
          flex-basis: 100%;
        }

        img {
          margin-left: 0;
          margin-top: 30px;
        }
      }
    `}</style>
  </section>
)

export default Analytics
