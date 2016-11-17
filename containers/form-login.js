'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'

import loginRequest from '../actions/login'

const propTypes = {
  loginRequest: React.PropTypes.func.isRequired,
  routing: React.PropTypes.object.isRequired
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
      const token = res.data.token
      localStorage.setItem('token', token)

      this.props.routing.url.pushTo('/profile')
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

FormLogin.propTypes = propTypes

const mapDispatchToProps = dispatch => {
  return {
    loginRequest: userData => dispatch(loginRequest(userData))
  }
}

export default connect(null, mapDispatchToProps)(FormLogin)
