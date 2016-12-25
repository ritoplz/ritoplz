'use strict'

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Link from 'next/link'

import configureStore from '../store/configureStore'
import FormSignup from '../containers/form-signup'

const Signup = props => {
  const store = configureStore()

  return (
    <Provider store={store}>
      <div className="row">
        <h2 className="title">Sign Up</h2>
        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lacus vel augue aliquet luctus. Ut urna libero.</p>

        <FormSignup routing={props}/>

        <Link href="/">Home</Link>
        <Link href="/login">Login</Link>
      </div>
    </Provider>
  )
}

export default Signup
