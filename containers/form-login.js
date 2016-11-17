'use strict'

import React from 'react'

const formLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault()
  }

  return (
    <form className="registration-form" onSubmit={this.handleLogin}>
      <fieldset className="form-input">
        <label className="label">E-mail</label>
        <input className="input" type="text" name="email" ref={input => {this.email = input}}/>
      </fieldset>

      <fieldset className="form-input">
        <label className="label">Password</label>
        <input className="input" type="password" name="password" ref={input => {this.password = input}}/>
      </fieldset>

      <button className="btn -secondary -large" type="submit">Login</button>
    </form>
  )
}
