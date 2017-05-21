'use strict'

import PropTypes from 'prop-types'

const ArrowDownIcon = ({ size = '8px', color = '#999' }) => (
  <svg width={size} height={size} viewBox="0 0 6 4">
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g
        id="Desktop-HD-Copy-4"
        transform="translate(-609.000000, -166.000000)"
        fillRule="nonzero"
        fill={color}
      >
        <g id="user" transform="translate(276.000000, 130.000000)">
          <g id="summoner" transform="translate(275.000000, 12.000000)">
            <path
              d="M61.0202868,27.2846193 C61.1260198,27.2846193 61.2317528,27.2423261 61.3057659,27.168313 L63.8962247,24.7364537 C64.0653975,24.5778542 64.0759708,24.3135217 63.9173713,24.1337756 C63.7587717,23.9646027 63.4944392,23.9540294 63.3146931,24.112629 L61.0202868,26.2801557 L58.7153071,24.1232023 C58.5461343,23.9646027 58.2818018,23.975176 58.112629,24.1443489 C57.9540294,24.3135217 57.9646027,24.5778542 58.1337756,24.747027 L60.7242343,27.1788863 C60.8088207,27.2423261 60.9145537,27.2846193 61.0202868,27.2846193 Z"
              id="arrow-down"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
)

ArrowDownIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string
}

export default ArrowDownIcon
