'use strict'

import PropTypes from 'prop-types'

const Logo = ({ size = '50px', type = 'default' }) => {
  let logo

  if (type === 'default') {
    logo = (
      <svg width={size} height={size} viewBox="0 0 410 410">
        <defs>
          <rect id="path-1" x="0" y="0" width="350" height="350" rx="70" />
          <filter
            x="-17.3%"
            y="-13.9%"
            width="134.6%"
            height="134.6%"
            filterUnits="objectBoundingBox"
            id="filter-2"
          >
            <feMorphology
              radius="0.5"
              operator="dilate"
              in="SourceAlpha"
              result="shadowSpreadOuter1"
            />
            <feOffset
              dx="0"
              dy="10"
              in="shadowSpreadOuter1"
              result="shadowOffsetOuter1"
            />
            <feGaussianBlur
              stdDeviation="15"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            />
            <feComposite
              in="shadowBlurOuter1"
              in2="SourceAlpha"
              operator="out"
              result="shadowBlurOuter1"
            />
            <feColorMatrix
              values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.25 0"
              type="matrix"
              in="shadowBlurOuter1"
              result="shadowMatrixOuter1"
            />
            <feMorphology
              radius="0.5"
              operator="dilate"
              in="SourceAlpha"
              result="shadowSpreadOuter2"
            />
            <feOffset
              dx="0"
              dy="2"
              in="shadowSpreadOuter2"
              result="shadowOffsetOuter2"
            />
            <feGaussianBlur
              stdDeviation="5"
              in="shadowOffsetOuter2"
              result="shadowBlurOuter2"
            />
            <feComposite
              in="shadowBlurOuter2"
              in2="SourceAlpha"
              operator="out"
              result="shadowBlurOuter2"
            />
            <feColorMatrix
              values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
              type="matrix"
              in="shadowBlurOuter2"
              result="shadowMatrixOuter2"
            />
            <feMerge>
              <feMergeNode in="shadowMatrixOuter1" />
              <feMergeNode in="shadowMatrixOuter2" />
            </feMerge>
          </filter>
        </defs>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="Logo-White" transform="translate(-51.000000, -61.000000)">
            <g id="logo" transform="translate(81.000000, 81.000000)">
              <g id="background">
                <use
                  fill="black"
                  fillOpacity="1"
                  filter="url(#filter-2)"
                  xlinkHref="#path-1"
                />
                <use
                  stroke="#979797"
                  strokeWidth="1"
                  fill="#6772E5"
                  fillRule="evenodd"
                  xlinkHref="#path-1"
                />
              </g>
              <g id="ritoplz" transform="translate(76.000000, 46.000000)">
                <polyline
                  id="Rectangle-6"
                  fill="#EEEEEE"
                  points="198 58 39 116.04878 39 177 198 118.95122"
                />
                <path
                  d="M0,0 L198,58.0487805 L198,119 L0,60.9512195 L0,0 Z M39,116 L198,197.963415 L198,259 L39,177.036585 L39,116 Z"
                  id="Combined-Shape"
                  fill="#FFFFFF"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    )
  } else {
    logo = (
      <svg width={size} height={size} viewBox="0 0 410 410">
        <defs>
          <rect id="path-1" x="0" y="0" width="350" height="350" rx="70" />
          <filter
            x="-17.1%"
            y="-13.7%"
            width="134.3%"
            height="134.3%"
            filterUnits="objectBoundingBox"
            id="filter-2"
          >
            <feOffset
              dx="0"
              dy="10"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            />
            <feGaussianBlur
              stdDeviation="15"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            />
            <feColorMatrix
              values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.25 0"
              type="matrix"
              in="shadowBlurOuter1"
              result="shadowMatrixOuter1"
            />
            <feOffset
              dx="0"
              dy="2"
              in="SourceAlpha"
              result="shadowOffsetOuter2"
            />
            <feGaussianBlur
              stdDeviation="5"
              in="shadowOffsetOuter2"
              result="shadowBlurOuter2"
            />
            <feColorMatrix
              values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
              type="matrix"
              in="shadowBlurOuter2"
              result="shadowMatrixOuter2"
            />
            <feMerge>
              <feMergeNode in="shadowMatrixOuter1" />
              <feMergeNode in="shadowMatrixOuter2" />
            </feMerge>
          </filter>
        </defs>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="Logo-Original" transform="translate(-51.000000, -61.000000)">
            <g id="logo" transform="translate(81.000000, 81.000000)">
              <g id="background">
                <use
                  fill="black"
                  fillOpacity="1"
                  filter="url(#filter-2)"
                  xlinkHref="#path-1"
                />
                <use fill="#FFFFFF" fillRule="evenodd" xlinkHref="#path-1" />
              </g>
              <g id="ritoplz" transform="translate(76.000000, 46.000000)">
                <polyline
                  id="Rectangle-6"
                  fill="#4E59D3"
                  points="198 58 39 116.04878 39 177 198 118.95122"
                />
                <path
                  d="M0,0 L198,58.0487805 L198,119 L0,60.9512195 L0,0 Z M39,116 L198,197.963415 L198,259 L39,177.036585 L39,116 Z"
                  id="Combined-Shape"
                  fill="#6772E5"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    )
  }

  return (
    <div>
      {logo}
    </div>
  )
}

Logo.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string
}

export default Logo
