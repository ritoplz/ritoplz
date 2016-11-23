'use strict'

import React, { Component } from 'react'
import { style } from 'next/css'
import Modal from 'react-modal'

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
    left: 475,
    right: 475,
    border: 'none',
    padding: '50px',
    boxShadow: '0 10px 50px rgba(0, 0, 0, .1)'
  }
}

export default class ModalAddSummoner extends Component {
  constructor () {
    super()

    this.handleForm = this.handleForm.bind(this)
  }

  handleForm (e) {
    e.preventDefault()
    const data = this.summoner.value
    // this.props.handleSubmit(data)
  }

  render () {
    return (
      <Modal isOpen={this.props.open} style={customStyle}>
        <form onSubmit={this.handleForm}>
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
