'use strict'

import PropTypes from 'prop-types'

const ClockIcon = ({ size = '12px', color = '#999' }) => (
  <svg width={size} height={size} viewBox="0 0 52 52">
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g
        id="noun_827156_cc"
        transform="translate(-24.000000, -1.000000)"
        fillRule="nonzero"
        fill={color}
      >
        <g id="Group" transform="translate(24.000000, 0.637820)">
          <path
            d="M26,0.36217 C11.6761,0.36217 0,12.03837 0,26.3622 C0,40.6859 11.6761,52.3622 26,52.3622 C40.3239,52.3622 52,40.6859 52,26.3622 C52,12.03837 40.3239,0.36217 26,0.36217 Z M26,6.36217 C37.0812,6.36217 46,15.28097 46,26.3622 C46,37.4431 37.0812,46.3622 26,46.3622 C14.9188,46.3622 6,37.4431 6,26.3622 C6,15.28097 14.9188,6.36217 26,6.36217 Z M26,9.36217 C24.3432,9.36217 23,10.70537 23,12.36217 L23,26.3622 C23,27.4717 23.6046,28.4369 24.5,28.9559 L34.9063,34.9559 C36.341,35.7843 38.1716,35.2971 39,33.8622 C39.8284,32.4273 39.341,30.5968 37.9063,29.7684 L29,24.6434 L29,12.36217 C29,10.70537 27.6569,9.36217 26,9.36217 Z"
            id="clock-icon"
          />
        </g>
      </g>
    </g>
  </svg>
)

ClockIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string
}

export default ClockIcon
