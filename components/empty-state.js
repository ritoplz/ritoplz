'use strict'

import { UiLink } from './../components/ui'
import { colors, typography } from './../components/ui/theme'

const EmptyState = () => (
  <div>
    <h2>You don't have any summmoners yet</h2>
    <p>
      To enter to our Rankings you have to have at least on summoner confirmed.
    </p>

    <UiLink href="/add-summoner">Add summoner</UiLink>
    <style jsx>{`
      div {
        text-align: center;
        padding-top: 100px;
        padding-bottom: 50px;
        width: 100%;
      }

      h2 {
        color: ${colors.heading};
        font-weight: 500;
        font-size: ${typography.f26};
      }

      p {
        color: ${colors.gray};
        font-weight: 400;
        font-size: ${typography.f16};
        margin-top: 10px;
        margin-bottom: 50px;
      }
    `}</style>
  </div>
)

export default EmptyState
