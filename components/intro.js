'use strict'

import React, { Component } from 'react'
import { style } from 'next/css'

import ModalAddLocation from './modal-add-location'

const styles = {
  base: {
    paddingTop: '50px',
    paddingBottom: '30px'
  },

  title: {
    fontSize: '70px',
    fontWeight: '400',
    lineHeight: '70px',
    marginBottom: '20px',
    marginTop: 0,
    color: '#333'
  },

  username: {
    fontWeight: 600
  },

  location: {
    color: '#ccc',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '30px',
    marginTop: 0,
    marginBottom: 0,
    cursor: 'pointer',
    transition: '.25s',

    ':hover': {
      color: '#999'
    }
  },

  divider: {
    width: '50px',
    border: '1px solid #F3F5FB',
    marginTop: '30px',
    marginLeft: 0
  }
}

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
    return (
      <header className={style(styles.base)}>
        <h1 className={style(styles.title)}>Hello, <span className={style(styles.username)}>{this.props.name}</span>!</h1>

        <h3 className={style(styles.location)} onClick={this.handleModal}>Add Location</h3>
        <hr className={style(styles.divider)}/>

        <ModalAddLocation open={this.state.modalAddLocation}/>
      </header>
    )
  }
}

export default Intro
