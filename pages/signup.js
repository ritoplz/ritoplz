'use strict'

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Link from 'next/link'

import configureStore from '../store/configureStore'
import FormSignUp from '../containers/form-sign-up'

const SignUp = props => {
  const store = configureStore()

  return (
    <Provider store={store}>
      <div className="row">
        <h2 className="title">Sign Up</h2>
        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lacus vel augue aliquet luctus. Ut urna libero.</p>

        <FormSignUp routing={props}/>

        <Link href="/">Home</Link>
        <Link href="/login">Login</Link>
      </div>
    </Provider>
  )
}

export default SignUp
