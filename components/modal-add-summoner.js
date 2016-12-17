'use strict'

import React, { Component } from 'react'
import { style } from 'next/css'
import Modal from 'react-modal'
import { connect } from 'react-redux'

import addSummoner from './../actions/add-summoner'
import fetchUser from '../actions/fetch-user'

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

class ModalAddSummoner extends Component {
  constructor (props) {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      modalStatus: props.open
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({modalStatus: nextProps.open})
  }

  handleCloseModal () {
    this.setState({modalStatus: false})
  }

  handleSubmit (e) {
    e.preventDefault()
    const localStorageRef = localStorage.getItem('token')
    const summoner = {name: this.summoner.value}

    this.props.addSummoner(summoner).then(() => {
      this.handleCloseModal()
      this.props.fetchUser(localStorageRef)
    })
  }

  render () {
    return (
      <Modal isOpen={this.state.modalStatus} onRequestClose={this.handleCloseModal} style={customStyle}>
        <form onSubmit={this.handleSubmit}>
          <fieldset className={style(styles.formInput)}>
            <label className={style(styles.label)}>Summoner</label>
            <input className={style(styles.input)} type="text" ref={node => this.summoner = node}/>
          </fieldset>

          <button className={style(styles.btn)}>Add Summoner</button>
        </form>
      </Modal>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addSummoner: summoner => dispatch(addSummoner(summoner)),
    fetchUser: token => dispatch(fetchUser(token))
  }
}

export default connect(null, mapDispatchToProps)(ModalAddSummoner)
