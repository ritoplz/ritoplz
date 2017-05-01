'use strict'

import React, { Component } from 'react'

import ModalAddLocation from './../containers/modal-add-location'

class Intro extends Component {
  constructor () {
    super()

    this.handleModal = this.handleModal.bind(this)

    this.state = {
      modalAddLocation: false
    }
  }

  handleModal () {
    this.setState({modalAddLocation: !this.state.modalAddLocation})
  }

  render () {
    const { name, location } = this.props

    return (
      <header className="base">
        <h1 className="title">Olá, <span className="username">{name}</span>!</h1>

        <h3 className="location" onClick={this.handleModal}>{location}</h3>
        <hr className="divider"/>

        <ModalAddLocation open={this.state.modalAddLocation}/>

        <style jsx>{`
          .base {
            padding-top: 50px;
            padding-bottom: 30px;
          }

          .title {
            font-size: 70px;
            font-weight: 400;
            line-height: 70px;
            margin-bottom: 20px;
            margin-top: 0;
            color: #333;
          }

          .username {
            font-weight: 600
          }

          .location {
            color: #ccc;
            font-weight: 400;
            font-size: 18px;
            line-height: 30px;
            margin-top: 0,
            margin-bottom: 0,
            cursor: pointer;
            transition: .25s;
          }

          .divider {
            width: 50px;
            border: 1px solid #F3F5FB;
            margin-top: 30px;
            margin-left: 0;
          }
        `}</style>
      </header>
    )
  }
}

export default Intro
