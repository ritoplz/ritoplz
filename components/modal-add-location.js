'use strict'

/* @flow */

import React, { Component } from 'react'
import { style } from 'next/css'
import Modal from 'react-modal'
import Select from 'react-select'
import { connect } from 'react-redux'

import fetchAccount from '../actions/fetch-account'
import editUser from './../actions/edit-user'

const styles = {
  formInput: {
    border: 'none',
    marginBottom: '20px'
  },

  label: {
    display: 'inline-block',
    marginBottom: '10px',
    fontWeight: 600,
    fontSize: '1.15rem',
    color: '#333'
  },

  input: {
    padding: '20px 15px',
    width: '100%',
    border: '1px solid #eee',
    borderRadius: '5px',
    fontSize: '1.1rem',
    outline: 'none',

    ':focus': {
      borderColor: '#ccc'
    }
  },

  btn: {
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 25px',
    fontSize: '1rem',
    height: '55px',
    marginTop: '30px',
    fontWeight: '500',
    cursor: 'pointer',
    width: '100%',
    background: 'linear-gradient(to right, #52bdab 0%,#6BB6D6 100%)'
  }
}

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
      country: null
    }
  }

  componentWillReceiveProps({ open }) {
    this.setState({modalStatus: open})
  }

  handleCountry (e) {
    this.setState({country: e.value})
  }

  handleState (e) {
    this.setState({state: e.value})
  }

  handleCity (e) {
    this.setState({city: e.value})
  }

  handleCloseModal () {
    this.setState({modalStatus: false})
  }

  handleSubmit (e) {
    e.preventDefault()

    const localStorageRef = localStorage.getItem('token')
    const data = {
      country: this.state.country,
      state: this.state.state,
      city: this.state.city
    }

    this.props.editUser(data).then(() => {
      this.handleCloseModal()
      this.props.fetchAccount(localStorageRef)
    })
  }

  render () {
    const countryList = [
      {value: 'BR', label: 'Brazil'},
      {value: 'United States', label: 'United States'}
    ]

    const stateList = [
      {value: 'São Paulo', label: 'São Paulo'}
    ]

    const cityList = [
      {value: 'São Paulo', label: 'São Paulo'}
    ]

    return (
      <Modal isOpen={this.state.modalStatus} onRequestClose={this.handleCloseModal} style={customStyle}>
        <form onSubmit={this.handleSubmit}>
          <fieldset className={style(styles.formInput)}>
            <label className={style(styles.label)}>Country</label>
            <Select options={countryList} value={this.state.country} onChange={this.handleCountry}/>
          </fieldset>

          <fieldset className={style(styles.formInput)}>
            <label className={style(styles.label)}>State</label>
            <Select options={stateList} value={this.state.state} onChange={this.handleState}/>
          </fieldset>

          <fieldset className={style(styles.formInput)}>
            <label className={style(styles.label)}>City</label>
            <Select options={cityList} value={this.state.city} onChange={this.handleCity}/>
          </fieldset>

          <button className={style(styles.btn)}>Add location</button>
        </form>
      </Modal>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editUser: user => dispatch(editUser(user)),
    fetchAccount: token => dispatch(fetchAccount(token))
  }
}

export default connect(null, mapDispatchToProps)(ModalAddLocation)
