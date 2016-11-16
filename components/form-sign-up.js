'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'

import signUpRequest from '../actions/sign-up'

class FormSignUp extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSignup = this.handleSignup.bind(this)

    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  handleChange (e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSignup (e) {
    e.preventDefault()

    const data = this.state

    this.props.signUpRequest(data).then(() => {
      this.props.routing.url.pushTo('/login')
    })
  }

  render () {
    return (
      <form className="registration-form" onSubmit={this.handleSignup}>
        <fieldset className="form-input">
          <label className="label">Name</label>
          <input className="input" type="text" name="name" onChange={this.handleChange}/>
        </fieldset>

        <fieldset className="form-input">
          <label className="label">E-mail</label>
          <input className="input" type="text" name="email" onChange={this.handleChange}/>
        </fieldset>

        <fieldset className="form-input">
          <label className="label">Password</label>
          <input className="input" type="password" name="password" onChange={this.handleChange}/>
        </fieldset>

        <button className="btn -secondary -large" type="submit">Sign Up</button>
      </form>
    )
  } 
}

FormSignUp.propTypes = {
  url: React.PropTypes.object
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
