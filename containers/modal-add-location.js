'use strict'

/* @flow */

import React, { Component } from 'react'
import { style } from 'next/css'
import Modal from 'react-modal'
import Select from 'react-select'
import { connect } from 'react-redux'
import Alert from 'react-s-alert'

import fetchAccount from '../actions/fetch-account'
import { countries, locations } from '../services/places'
import editUser from './../actions/edit-user'
import { EDIT_USER_SUCCESS, EDIT_USER_ERROR } from './../constants'

const customStyle = {
  overlay: {
    background-color: 'rgba(0, 0, 0, .75)'
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

class ModalAddLocation extends Component {
  constructor (props) {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCountry = this.handleCountry.bind(this)
    this.handleState = this.handleState.bind(this)
    this.handleCity = this.handleCity.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)

    this.state = {
      modalStatus: props.open,
      countryList: countries,
      stateList: null,
      cityList: null,
      country: null,
      state: null,
      city: null
    }
  }

  componentWillReceiveProps({ open }) {
    this.setState({modalStatus: open})
  }

  handleCountry (e) {
    this.setState({
      country: e.value,
      stateList: locations[e.value]
    })
  }

  handleState (e) {
    const city = locations[this.state.country].filter(state => state.value === e.value)
    this.setState({
      state: e.label,
      stateParam: e.value,
      cityList: city[0].cities
    })
  }

  handleCity (e) {
    this.setState({city: e.value})
  }

  handleCloseModal () {
    this.setState({modalStatus: false})
  }

  handleSubmit (e) {
    e.preventDefault()

    const userData = {
      country: this.state.country,
      state: this.state.state,
      city: this.state.city
    }

    this.props.editUser(userData)
      .then(({ data, type }) => {
        if (type === EDIT_USER_SUCCESS) {
          this.handleCloseModal()
          this.props.fetchAccount()
        }

        if (type === EDIT_USER_ERROR) {
          Alert.error(data, {position: 'top-right'})
        }
      })
  }

  render () {
    return (
      <Modal isOpen={this.state.modalStatus} onRequestClose={this.handleCloseModal} style={customStyle}>
        <form onSubmit={this.handleSubmit}>
          <fieldset className="formInput">
            <label className="label">País</label>
            <Select options={this.state.countryList} value={this.state.country} onChange={this.handleCountry}/>
          </fieldset>

          <fieldset className="formInput">
            <label className="label">Estado</label>
            <Select options={this.state.stateList} value={this.state.stateParam} onChange={this.handleState}/>
          </fieldset>

          <fieldset className="formInput">
            <label className="label">Cidade</label>
            <Select options={this.state.cityList} value={this.state.city} onChange={this.handleCity}/>
          </fieldset>

          <button className="btn">Adicionar localização</button>
        </form>

        <Alert effect="jelly" stack={{limit: 3}}/>

        <style jsx>{`
          .formInput {
            border: none;
            margin-bottom: 20px;
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
    editUser: (user) => dispatch(editUser(user)),
    fetchAccount: () => dispatch(fetchAccount())
  }
}

export default connect(null, mapDispatchToProps)(ModalAddLocation)
