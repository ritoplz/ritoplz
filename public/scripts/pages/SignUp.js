'use strict'

import React, {Component} from 'react'

export default class SignUp extends Component {
  render () {
    return (
      <div>
        <div className='row'>
          <section className='col-md-7'>
            <h2 className='title'>Sign Up</h2>
            <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lacus vel augue aliquet luctus. Ut urna libero.</p>

            <form className='registration-form' action='/signup' method='post'>
              <fieldset className='form-input'>
                <label className='label'>E-mail</label>
                <input className='input' type='text' name='email' />
              </fieldset>

              <fieldset className='form-input'>
                <label className='label'>Password</label>
                <input className='input' type='password' name='password' />
              </fieldset>

              <button className='btn -secondary -large' type='submit'>Login</button>
            </form>
          </section>
        </div>
      </div>
    )
  }
}
