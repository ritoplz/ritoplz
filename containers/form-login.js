'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'

import loginRequest from '../actions/login'
import * as types from './../constants'

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
      <form className="registration-form" onSubmit={this.handleLogin}>
        <fieldset className="form-input">
          <label className="label">E-mail</label>
          <input className="input" type="text" name="email" ref={input => this.email = input}/>
        </fieldset>

        <fieldset className="form-input">
          <label className="label">Password</label>
          <input className="input" type="password" name="password" ref={input => this.password = input}/>
        </fieldset>

        <button className="btn -secondary -large" type="submit">Login</button>
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
