'use strict'

import React, {Component} from 'react'

export default class extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.submitSignup = this.submitSignup.bind(this)

    this.state = {name: '', email: '', password: ''}
  }

  handleChange (e) {
    this.setState({[e.target.name]: e.target.value})
  }

  submitSignup (e) {
    e.preventDefault()

    return fetch('http://localhost:3001/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
    }).then((res) => {
      this.props.url.pushTo('/login')
    })
  }

  render () {
    return (
      <div>
        <div className='row'>
          <h2 className='title'>Sign Up</h2>
          <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lacus vel augue aliquet luctus. Ut urna libero.</p>

          <form className='registration-form' onSubmit={this.submitSignup}>
            <fieldset className='form-input'>
              <label className='label'>Name</label>
              <input className='input' type='text' name="name" onChange={this.handleChange} />
            </fieldset>

            <fieldset className='form-input'>
              <label className='label'>E-mail</label>
              <input className='input' type='text' name="email" onChange={this.handleChange} />
            </fieldset>

            <fieldset className='form-input'>
              <label className='label'>Password</label>
              <input className='input' type='password' name="password" onChange={this.handleChange} />
            </fieldset>

            <button className='btn -secondary -large' type='submit'>Sign Up</button>
          </form>
        </div>
      </div>
    )
  }
}
