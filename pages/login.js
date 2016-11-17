'use strict'

/* global localStorage: false */

import React from 'react'

import FormLogin from '../containers/form-login'

const Login = () => {
  return (
    <div className="row">
      <h2 className="title">Login</h2>
      <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lacus vel augue aliquet luctus. Ut urna libero.</p>

      <FormLogin />
    </div>
  )
}

export default Login
