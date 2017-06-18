'use strict'

import { colors, typography } from './theme'

const DividerOr = () => (
  <div>
    or

    <style jsx>{`
      div {
        position: relative;
        text-transform: uppercase;
        color: ${colors.gray};
        font-size: ${typography.f10};
        font-weight: 600;
        margin-bottom: 20px;
        margin-top: 20px;
      }

      div:before {
        position: absolute;
        content: '';
        top: 5px;
        left: 0;
        width: 45%;
        height: 1px;
        background-color: ${colors.grayLight};
      }

      div:after {
        position: absolute;
        content: '';
        top: 5px;
        right: 0;
        width: 45%;
        height: 1px;
        background-color: ${colors.grayLight};
      }
    `}</style>
  </div>
)

export default DividerOr
