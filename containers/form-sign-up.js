'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'

import signUpRequest from '../actions/sign-up'

const propTypes = {
  signUpRequest: React.PropTypes.func.isRequired,
  routing: React.PropTypes.object.isRequired
}

class FormSignUp extends Component {
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

    this.props.signUpRequest(data).then(() => {
      this.props.routing.url.pushTo('/login')
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

FormSignUp.propTypes = propTypes

const mapDispatchToProps = dispatch => {
  return {
    signUpRequest: userData => dispatch(signUpRequest(userData))
  }
}

export default connect(null, mapDispatchToProps)(FormSignUp)
