'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'

import signUpRequest from '../actions/sign-up'

const FormSignUp = () => {
  const handleSignup = (e) => {
    e.preventDefault()
  }

  return (
    <form className="registration-form">
      <fieldset className="form-input">
        <label className="label">Name</label>
        <input className="input" type="text"/>
      </fieldset>

      <fieldset className="form-input">
        <label className="label">E-mail</label>
        <input className="input" type="text"/>
      </fieldset>

      <fieldset className="form-input">
        <label className="label">Password</label>
        <input className="input" type="password"/>
      </fieldset>

      <button className="btn -secondary -large" type="submit">Sign Up</button>
    </form>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    products: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUpRequest: userData => dispatch(signUpRequest(userData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormSignUp)
