'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'

import signupRequest from '../actions/signup'
import * as types from './../constants'

class FormSignup extends Component {
  constructor () {
    super()

    this.handleSignup = this.handleSignup.bind(this)
  }

  handleSignup(e) {
    e.preventDefault()

    const data = {
      name: this.name.value,
      email: this.email.value,
      password: this.password.value
    }

    this.props.signupRequest(data).then(res => {
      if (res.type === types.SIGNUP_SUCCESS) {
        this.props.routing.url.pushTo('/login')
      }

      if (res.type === types.SIGNUP_ERROR) {
        console.log(res.data)
      }
    })
  }

  render () {
    return (
      <form className="registration-form" onSubmit={this.handleSignup}>
        <fieldset className="form-input">
          <label className="label">Name</label>
          <input className="input" type="text" ref={input => this.name = input}/>
        </fieldset>

        <fieldset className="form-input">
          <label className="label">E-mail</label>
          <input className="input" type="email" ref={input => this.email = input}/>
        </fieldset>

        <fieldset className="form-input">
          <label className="label">Password</label>
          <input className="input" type="password" ref={input => this.password = input}/>
        </fieldset>

        <button className="btn -secondary -large" type="submit">Sign Up</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signupRequest: userData => dispatch(signupRequest(userData))
  }
}

export default connect(null, mapDispatchToProps)(FormSignup)
