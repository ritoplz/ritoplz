'use strict'

import React, { Component } from 'react'

export default class Summoner extends Component {
  render () {
    const check = this.props.status ? '/static/checkmark.png' : '/static/errormark.png'
    const confirm = this.props.status ? '' : <button className="confirm" onClick={summoner => this.props.confirmSummoner(this.props.name)} disabled={this.props.requesting}>Confirm summoner</button>

    return (
      <article className="base">
        <header className="header">
          <img className="cover" src={this.props.cover} alt=""/>
        </header>

        <ul className="info">
          <li className="item">
            <h3 className="title">Invocador</h3>
            <span className="subtitle">{this.props.name}</span>
          </li>

          <li className="item">
            <h3 className="title">Código</h3>
            <span className="subtitle">{this.props.code}</span>
          </li>

          <li className="item">
            <h3 className="title">Status</h3>
            <span>
              <img className="checkmark" src={check} alt=""/>
            </span>
          </li>

          {confirm}
        </ul>

        <style jsx>{`
          .base {
            flex-basis: calc(50% - 30px);
            margin: 15px;
          }

          .cover {
            width: 100%;
          }

          .info {
            border-left: 1px solid #F3F5FB;
            border-bottom: 1px solid #F3F5FB;
            border-right: 1px solid #F3F5FB;
            margin-top: 0;
            width: 100%;
            padding-left: 0;
            padding-right: 0;
            box-sizing: border-box;
            border-bottom-right-radius: 10px;
            border-bottom-left-radius: 10px;
          }

          .item {
            display: inline-block;
            width: 33.33%;
            text-align: center;
            padding-top: 20px;
            padding-bottom: 20px;
          }

          .title {
            margin-top: 0;
            font-weight: 400;
            font-size: .9rem;
            color: #ccc;
            margin-bottom: 5px;
          }

          .subtitle {
            font-size: 1.2rem;
            font-weight: 600;
            color: #333;
          }

          .checkmark {
            vertical-align: middle;
          }

          .confirm {
            width: 100%;
            background-color: transparent;
            padding: 20px;
            font-size: 1rem;
            border: none;
            border-top: 1px solid #F3F5FB;
            color: #ccc;
            cursor: pointer;
            transition: .25s ease-in-out;
            outline: none;
          }
        `}</style>
      </article>
    )
  }
}
