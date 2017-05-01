'use strict'

import React, { Component } from 'react'
import { style } from 'next/css'
import Modal from 'react-modal'
import Slider from 'react-slick'

import { toggleTutorial } from './../services/auth'

const customStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, .75)'
  },

  content: {
    top: 25,
    bottom: 'auto',
    left: '15px',
    right: '15px',
    border: 'none',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '50px',
    boxShadow: '0 10px 50px rgba(0, 0, 0, .1)',
    maxWidth: '850px',
    width: '90%',
    textAlign: 'center'
  }
}

class ModalTutorial extends Component {
  constructor (props) {
    super()

    this.handleCloseModal = this.handleCloseModal.bind(this)
    this.setCookie = this.setCookie.bind(this)

    this.state = {
      modalStatus: props.open,
      checker: false
    }
  }

  componentWillReceiveProps({ open }) {
    this.setState({modalStatus: open})
  }

  handleCloseModal () {
    this.setState({modalStatus: false})
  }

  setCookie (e) {
    this.setState({checker: !this.state.checker})
    setTimeout(() => toggleTutorial(this.state.checker), 1)
  }

  render () {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    }

    return (
      <Modal isOpen={this.state.modalStatus} onRequestClose={this.handleCloseModal} style={customStyle}>
        <Slider {...settings}>
          <div>
            <h1 className="title">Aprendar como confirmar seu Invocador</h1>
            <h2 className="subtitle">Para participar do Ritoplz Rankings você precisa adicionar um Invocador</h2>

            <img className="image" src="static/placeholder.svg" alt=""/>
          </div>

          <div>
            <h1 className="title">Receba o código</h1>
            <h2 className="subtitle">Você receberá um código quando adicionar seu invocador</h2>

            <img className="slickImage" src="static/code.png" alt=""/>
          </div>

          <div>
            <h1 className="title">Página de Talentos no League of Legends</h1>
            <h2 className="subtitle">Crie uma página de talentos e use o código recebido como nome da página</h2>

            <img className="slickImage" src="static/mastery.svg" alt=""/>
          </div>

          <div>
            <h1 className="title">Confirme seu invocador</h1>
            <h2 className="subtitle">Após criar sua página de talentos com o código, você precisa confirmar seu invocador clicando em "Confirmar Invocador"</h2>

            <img className="slickImage" src="static/confirm.svg" alt=""/>

            <button className="btn" onClick={this.handleCloseModal}>Pronto</button>
          </div>
        </Slider>

        <style jsx>{`
          .title {
            textAlign: center;
            color: #333;
            fontSize: 2rem;
            fontWeight: 500;
            marginBottom: 10px;
          }

          .subtitle {
            color: #999;
            fontSize: 1.15rem;
            fontWeight: 400;
            textAlign: center;
            marginBottom: 30px;
            lineHeight: 2rem;
          }

          .btn {
            color: #52bdab;
            borderRadius: 5px;
            padding: 10px 25px;
            fontSize: .9rem;
            fontWeight: 500;
            cursor: pointer;
            border: 2px solid #52bdab;
            float: right;
            backgroundColor: transparent;
            marginTop: 70px;
            marginRight: 5px;
            transition: .25s;
          }

          .slickImage {
            display: inline-block;
            width: 90%;
            marginLeft: auto;
            marginRight: auto;
          }

          .image {
            maxWidth: 100%;
          }
        `}</style>
      </Modal>
    )
  }
}

export default ModalTutorial
