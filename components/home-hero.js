'use strict'

import { UiLink } from './/ui'
import { colors, typography, phone, tablet } from './ui/theme'

const Hero = () => (
  <section>
    <h1>Ritoplz <span>Rankings</span></h1>
    <h2>
      Worldwide Rankings for League of Legends. See who's the best player in your region.
    </h2>

    <UiLink href="/signup">Create an account</UiLink>
    <UiLink href="/rankings" ui="link">See Rankings</UiLink>

    <style jsx>{`
      section {
        padding-top: 75px;
        padding-bottom: 400px;
        position: relative;
        z-index: 1;
      }

      h1 {
        font-size: 75px;
        color: ${colors.primary};
        font-weight: 700;
      }

      span {
        color: ${colors.heading};
        display: block;
      }

      h2 {
        color: ${colors.gray};
        font-size: ${typography.f16};
        font-weight: 500;
        margin-top: 20px;
        margin-bottom: 50px;
        max-width: 330px;
        line-height: 2rem;
      }

      @media ${tablet} {
        section {
          padding-bottom: 200px;
        }
      }

      @media ${phone} {
        section {
          padding-bottom: 0;
        }
      }
    `}</style>
  </section>
)

export default Hero
