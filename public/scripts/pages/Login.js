'use strict'

import React, {Component} from 'react'
import {browserHistory} from 'react-router'

export default class Login extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.submitLogin = this.submitLogin.bind(this)

    this.state = {email: '', password: ''}
  }

  handleChange (e) {
    this.setState({[e.target.name]: e.target.value})

    console.log(this.state)
  }

  submitLogin (e) {
    e.preventDefault()

    return fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    }).then((res) => {
      browserHistory.push('/profile')
    })
  }

  render () {
    return (
      <div>
        <div className='row'>
          <h2 className='title'>Login</h2>
          <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lacus vel augue aliquet luctus. Ut urna libero.</p>

          <form className='registration-form' onSubmit={this.submitLogin}>
            <fieldset className='form-input'>
              <label className='label'>E-mail</label>
              <input className='input' type='text' name='email' onChange={this.handleChange} />
            </fieldset>

            <fieldset className='form-input'>
              <label className='label'>Password</label>
              <input className='input' type='password' name='password' onChange={this.handleChange} />
            </fieldset>

            <button className='btn -secondary -large' type='submit'>Login</button>
          </form>
        </div>
      </div>
    )
  }
}
