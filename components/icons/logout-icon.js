'use strict'

import PropTypes from 'prop-types'

const LogoutIcon = ({ size = '16px', color = '#999' }) => (
  <svg width={size} height={size} viewBox="0 0 17 16">
    <g
      id="Symbols"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g id="header" transform="translate(-1172.000000, -23.000000)">
        <g id="menu">
          <g transform="translate(755.000000, 23.000000)">
            <g id="settings" transform="translate(349.000000, 0.000000)">
              <g id="logout" transform="translate(68.000000, 0.000000)">
                <path
                  d="M9.25,1.99984902 L9.25,4.04712474 L9.25,12.0153635 L9.25,14.0076818 C9.25,14.6963357 8.69580993,15.25 8.00038502,15.25 L1.99961498,15.25 C1.30970955,15.25 0.75,14.6915083 0.75,14.0059397 L0.75,1.99406028 C0.75,1.30429509 1.30433672,0.75 1.99961498,0.75 L8.00038502,0.75 C8.68937012,0.75 9.25,1.31124268 9.25,1.99984923 L9.25,1.99984902 Z"
                  id="Rectangle-9"
                  stroke={color}
                  strokeWidth="1.5"
                />
                <rect
                  id="Rectangle"
                  fill="#FFFFFF"
                  x="6"
                  y="4"
                  width="11"
                  height="8"
                />
                <path
                  d="M16.8564955,7.58678537 L14.0564253,4.21770101 C13.8223695,3.93980506 13.4467497,3.93802366 13.2094619,4.15510783 C12.9721741,4.37218989 12.9439161,4.797028 13.1501519,5.04680902 L15.0814507,7.36962751 L7.6000196,7.36962751 C7.26863982,7.36962751 7,7.65246126 7,8.00132885 C7,8.3502175 7.26863982,8.6330302 7.6000196,8.6330302 L15.0814507,8.6330302 L13.1501519,10.9558592 C12.9439161,11.2056339 12.9774841,11.6241992 13.2094619,11.8475478 C13.4524837,12.081551 13.8502715,12.0348051 14.0564253,11.7849672 L16.8564955,8.41589339 C17.0530814,8.13979779 17.0425154,7.82845325 16.8564955,7.58678537 Z"
                  id="Shape"
                  fill={color}
                  fillRule="nonzero"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
)

LogoutIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  customStyle: PropTypes.object
}

export default LogoutIcon
