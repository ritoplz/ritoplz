'use strict'

/* @flow */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from './../components/button'

class ProfileContent extends Component {
  constructor () {
    super()
  }

  render() {
    return (
      <div>
        <div className="header-bg">
          <div className="row">
            <header className="header">
              <img src="/static/logo.svg" alt=""/>
              <div className="header-controls">
                <span className="header-points">
                  <span className="header-points__title">Points</span>
                  <span className="header-points__value">530
                    <span className="header-points__value--label">pts</span>
                  </span>
                </span>
              </div>
            </header>
          </div>
        </div>

        <div className="row">
          <main className="content">
            <h2 className="content__title">My summoners</h2>
          </main>
        </div>

        <style jsx>{`
          .row {
            max-width: 1100px;
            margin-left: auto;
            margin-right: auto;
          }

          .header-bg {
            background: linear-gradient(to right, #52bdab 0%,#6BB6D6 100%);
            height: 70px;
            width: 100%;
          }

          .header {
            display: flex;
            justify-content: space-between;
          }

          .header__title {
            color: #fff;
            font-size: 36px;
            font-weight: 500;
          }

          .header-points {
            display: inline-block;
            padding-left: 30px;
            position: relative;
          }

          .header-points:before {
            content: '';
            position: absolute;
            left: 0;
            top: 10px;
            width: 1px;
            height: 25px;
            background-color: rgba(255, 255, 255, .2);
          }

          .header-points__title {
            display: block;
            color: rgba(255, 255, 255, .6);
            font-size: 14px;
            font-weight: 400;
          }

          .header-points__value {
            display: block;
            color: #fff;
            font-size: 20px;
            font-weight: 600;
          }

          .header-points__value--label {
            font-size: 14px;
          }

          .content {
            box-shadow: 0 -18px 16px rgba(42, 42, 68, .1);
            border-radius: 15px;
            padding: 40px 30px;
            margin-top: 100;
            background-color: #fff;
          }

          .content__title {
            font-size: 14px;
            text-transform: uppercase;
            color: #2A2A44;
            opacity: .5;
            font-family: 'Open Sans';
            letter-spacing: 1px;
            font-weight: 600;
          }
        `}</style>
      </div>
    )
  }
}

export default connect(null, null)(ProfileContent)
