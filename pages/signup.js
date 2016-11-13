'use strict'

/* global fetch: false */

import React, {Component} from 'react'

import configureStore from '../store/configureStore'

export default class SignUp extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSignup = this.handleSignup.bind(this)

    this.state = {name: '', email: '', password: ''}
  }

  handleChange (e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSignup (e) {
    e.preventDefault()

    return fetch('http://localhost:3001/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
    }).then(() => {
      this.props.url.pushTo('/login')
    })
  }

  render () {
    const store = configureStore()

    return (
      <Provider store={store}>
        <div className="row">
          <h2 className="title">Sign Up</h2>
          <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lacus vel augue aliquet luctus. Ut urna libero.</p>

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
        </div>
      </Provider>
    )
  }
}

SignUp.propTypes = {
  url: React.PropTypes.object
}
