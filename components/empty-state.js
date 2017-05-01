'use strict'

/* @flow */

import React, {Component} from 'react'
import { connect } from 'react-redux'

import ModalAddSummoner from './../containers/modal-add-summoner'

class EmptyState extends Component {
  constructor () {
    super()

    this.handleModal = this.handleModal.bind(this)

    this.state = {
      modalAddSummoner: false
    }
  }

  handleModal () {
    this.setState({modalAddSummoner: !this.state.modalAddSummoner})
  }

  render () {
    return (
      <section className="base">
        <h2 className="title">Você não tem nenhum Invocador ainda</h2>
        <h3 className="subtitle">Para participar do Ritoplz Rankings você precisa adicionar um Invocador</h3>

        <button className="btn" onClick={this.handleModal}>Adicionar Invocador</button>

        <ModalAddSummoner open={this.state.modalAddSummoner}/>

        <style jsx>{`
          .base {
            border: 1px solid #F3F5FB;
            border-radius: 10px;
            text-align: center;
            padding-top: 50px;
            padding-bottom: 50px;
            box-shadow: 0 10px 50px rgba(0, 0, 0, .025);
            margin-bottom: 70px;
          }

          .title {
            color: #333;
            font-weight: 400;
            font-size: 2rem;
            margin-bottom: 15px;
          }

          .subtitle {
            color: #ccc;
            margin-top: 0,
            font-weight: 300;
            font-size: 20px;
            line-height: 33px;
            max-width: 320px;
            margin-left: auto;
            margin-right: auto;
          }

          .btn {
            color: #fff;
            border: none;
            border-radius: 5px;
            padding: 10px 25px;
            font-size: .9rem;
            height: 50px;
            margin-top: 30px;
            font-weight: 500;
            cursor: pointer;
            background: linear-gradient(to right, #52bdab 0%,#6BB6D6 100%);
          }
        `}</style>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    modals: state.modals
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmptyState)
