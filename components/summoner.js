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
            flexBasis: calc(50% - 30px);
            margin: 15px;
          }

          .cover {
            width: 100%;
          }

          .info {
            borderLeft: 1px solid #F3F5FB;
            borderBottom: 1px solid #F3F5FB;
            borderRight: 1px solid #F3F5FB;
            marginTop: 0;
            width: 100%;
            paddingLeft: 0;
            paddingRight: 0;
            boxSizing: border-box;
            borderBottomRightRadius: 10px;
            borderBottomLeftRadius: 10px;
          }

          .item {
            display: inline-block;
            width: 33.33%;
            textAlign: center;
            paddingTop: 20px;
            paddingBottom: 20px;
          }

          .title {
            marginTop: 0;
            fontWeight: 400;
            fontSize: .9rem;
            color: #ccc;
            marginBottom: 5px;
          }

          .subtitle {
            fontSize: 1.2rem;
            fontWeight: 600;
            color: #333;
          }

          .checkmark {
            verticalAlign: middle;
          }

          .confirm {
            width: 100%;
            backgroundColor: transparent;
            padding: 20px;
            fontSize: 1rem;
            border: none;
            borderTop: 1px solid #F3F5FB;
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
