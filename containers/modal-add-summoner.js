'use strict'

import React, { Component } from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import Alert from 'react-s-alert'

import addSummoner from './../actions/add-summoner'
import fetchAccount from '../actions/fetch-account'
import { ADD_SUMMONER_SUCCESS, ADD_SUMMONER_ERROR } from './../constants'

const customStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, .75)'
  },

  content: {
    top: 100,
    bottom: 'auto',
    left: '15px',
    right: '15px',
    border: 'none',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '50px',
    boxShadow: '0 10px 50px rgba(0, 0, 0, .1)',
    maxWidth: '500px',
    width: '90%'
  }
}

class ModalAddSummoner extends Component {
  constructor (props) {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)

    this.state = {
      modalStatus: props.open
    }
  }

  componentWillReceiveProps(props) {
    this.setState({modalStatus: props.open})
  }

  handleCloseModal () {
    this.setState({modalStatus: false})
  }

  handleSubmit (e) {
    e.preventDefault()
    const summoner = {name: this.summoner.value}

    this.props.addSummoner(summoner)
      .then(({ data, type }) => {
        if (type === ADD_SUMMONER_SUCCESS) {
          this.handleCloseModal()
          this.props.fetchAccount()
        }

        if (type === ADD_SUMMONER_ERROR) {
          Alert.error(data, {position: 'top-right'})
        }
      })
  }

  render () {
    return (
      <Modal isOpen={this.state.modalStatus} onRequestClose={this.handleCloseModal} style={customStyle}>
        <form onSubmit={this.handleSubmit}>
          <fieldset className="formInput">
            <label className="label">Invocador</label>
            <input className="input" type="text" ref={node => this.summoner = node}/>
          </fieldset>

          <button className="btn">Adicionar Invocador</button>
        </form>

        <Alert effect="jelly" stack={{limit: 3}}/>

        <style jsx>{`
          .formInput {
            border: none;
            margin-bottom: 20px
          }

          .label {
            display: inline-block;
            margin-bottom: 10px;
            font-weight: 600,
            font-size: 1.15rem;
            color: #333;
          }

          .input {
            padding: 20px 15px;
            width: 100%;
            border: 1px solid #eee;
            border-radius: 5px;
            font-size: 1.1rem;
            outline: none;
          }

          .btn {
            color: #fff;
            border: none;
            border-radius: 5px;
            padding: 10px 25px;
            font-size: 1rem;
            height: 55px;
            margin-top: 30px;
            font-weight: 500;
            cursor: pointer;
            width: 100%;
            background: linear-gradient(to right, #52bdab 0%,#6BB6D6 100%);
          }
        `}</style>
      </Modal>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addSummoner: summoner => dispatch(addSummoner(summoner)),
    fetchAccount: () => dispatch(fetchAccount())
  }
}

export default connect(null, mapDispatchToProps)(ModalAddSummoner)
