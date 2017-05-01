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
            paddingTop: 50px;
            paddingBottom: 30px;
          }

          .title {
            fontSize: 70px;
            fontWeight: 400;
            lineHeight: 70px;
            marginBottom: 20px;
            marginTop: 0;
            color: #333;
          }

          .username {
            fontWeight: 600
          }

          .location {
            color: #ccc;
            fontWeight: 400;
            fontSize: 18px;
            lineHeight: 30px;
            marginTop: 0,
            marginBottom: 0,
            cursor: pointer;
            transition: .25s;
          }

          .divider {
            width: 50px;
            border: 1px solid #F3F5FB;
            marginTop: 30px;
            marginLeft: 0;
          }
        `}</style>
      </header>
    )
  }
}

export default Intro
