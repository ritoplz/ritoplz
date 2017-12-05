'use strict'

import React from 'react'

export default () => (
  <svg width="76px" height="76px" viewBox="0 0 76 76">
    <defs>
      <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="linearGradient-1">
        <stop stopColor="#843DFD" offset="0%" />
        <stop stopColor="#483DFD" offset="100%" />
      </linearGradient>

      <filter
        x="-17.4%"
        y="-13.3%"
        width="136.5%"
        height="126.6%"
        filterUnits="objectBoundingBox"
        id="filter-2"
      >
        <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation="2"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
          type="matrix"
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Desktop-HD-Copy" transform="translate(-682.000000, -389.000000)">
        <g id="Group" transform="translate(470.000000, 389.000000)">
          <g id="logo" transform="translate(212.000000, 0.000000)">
            <rect
              id="Rectangle-7"
              fill="url(#linearGradient-1)"
              x="0"
              y="0"
              width="76"
              height="76"
              rx="8"
            />
            <g
              id="ritoplz"
              filter="url(#filter-2)"
              transform="translate(20.979167, 15.833333)"
            >
              <polyline
                id="Rectangle-6"
                fill="#EEEEEE"
                points="34.31654 10.0401998 6.75931848 20.0888438 6.75931848 30.6399201 34.31654 20.591276"
              />
              <path
                d="M0,0 L34.31654,10.048644 L34.31654,20.5997203 L0,10.5510762 L0,0 Z M6.75931848,20.0803996 L34.31654,34.2688317 L34.31654,44.8346853 L6.75931848,30.6462533 L6.75931848,20.0803996 Z"
                id="Combined-Shape"
                fill="#FFFFFF"
              />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
)
