'use strict'

import React, {Component} from 'react'

export default class extends Component {
  constructor (props) {
    super(props)
    this.submitLogin = this.submitLogin.bind(this)
  }

  submitLogin (e) {
    e.preventDefault()

    fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.email.value,
        password: this.password.value
      })
    }).then(res => {
      this.props.url.pushTo('/profile')
    }).catch(err => {
      console.log(err)
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
              <input className='input' type='text' name='email' ref={input => {this.email = input}} />
            </fieldset>

            <fieldset className='form-input'>
              <label className='label'>Password</label>
              <input className='input' type='password' name='password' ref={input => {this.password = input}} />
            </fieldset>

            <button className='btn -secondary -large' type='submit'>Login</button>

          </form>
        </div>
      </div>
    )
  }
}
