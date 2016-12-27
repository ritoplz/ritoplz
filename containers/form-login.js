'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { style } from 'next/css'

import loginRequest from '../actions/login'
import * as types from './../constants'

const styles = {
  loginForm: {
    maxWidth: '60%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  formInput: {
    border: 'none',
    marginBottom: '25px'
  },

  label: {
    display: 'block',
    fontSize: '1rem',
    fontWeight: '500',
    marginBottom: '10px'
  },

  input: {
    width: '100%',
    height: '55px',
    borderRadius: '4px',
    border: '1px solid #f2f2f2',
    padding: '15px',
    fontSize: '1.15rem',
    outline: 'none',
    color: '#333',
    transition: '.25s',

    ':focus': {
      borderColor: '#ddd'
    }
  },

  btn: {
    width: '100%',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 25px',
    fontSize: '.9rem',
    height: '55px',
    marginTop: '25px',
    fontWeight: '500',
    cursor: 'pointer',
    background: 'linear-gradient(to right, #52bdab 0%,#6BB6D6 100%)'
  }
}

class FormLogin extends Component {
  constructor() {
    super()

    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin(e) {
    e.preventDefault()

    const data = {
      email: this.email.value,
      password: this.password.value
    }

    this.props.loginRequest(data).then(res => {
      console.log('For some weird reason res is returning undefined when success', res)
      // if (res.type === types.LOGIN_SUCCESS) {
        this.props.routing.url.pushTo('/profile')
      // }

      if (res.type === types.LOGIN_ERROR) {
        console.log(res.data)
      }
    })
  }

  render() {
    return (
      <form className={style(styles.loginForm)} onSubmit={this.handleLogin}>
        <fieldset className={style(styles.formInput)}>
          <label className={style(styles.label)}>E-mail</label>
          <input className={style(styles.input)} type="text" name="email" ref={input => this.email = input}/>
        </fieldset>

        <fieldset className={style(styles.formInput)}>
          <label className={style(styles.label)}>Password</label>
          <input className={style(styles.input)} type="password" name="password" ref={input => this.password = input}/>
        </fieldset>

        <button className={style(styles.btn)} type="submit">Login</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginRequest: userData => dispatch(loginRequest(userData))
  }
}

export default connect(null, mapDispatchToProps)(FormLogin)
