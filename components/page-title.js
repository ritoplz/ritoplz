'use strict'

import PropTypes from 'prop-types'
import { colors } from './../components/ui/theme'

const PageTitle = ({ title, children }) => (
  <div>
    <h2>{title}</h2>

    {children}

    <style jsx>{`
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 50px;
        margin-bottom: 30px;
      }

      h2 {
        color: ${colors.heading};
        font-weight: 600;
      }
    `}</style>
  </div>
)

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default PageTitle
