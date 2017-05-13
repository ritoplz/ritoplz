'use strict'

import PropTypes from 'prop-types'
import { colors } from './../components/ui/theme'

const PageTitle = ({ title }) => (
  <div>
    <h2>{title}</h2>

    <style jsx>{`
      h2 {
        margin-top: 50px;
        margin-bottom: 25px;
        color: ${colors.heading};
        font-weight: 600;
      }
    `}</style>
  </div>
)

PageTitle.propTypes = {
  title: PropTypes.string.isRequired
}

export default PageTitle
