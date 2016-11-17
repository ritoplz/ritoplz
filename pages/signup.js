'use strict'

import React, { Component } from 'react'
import { Provider } from 'react-redux'

import configureStore from '../store/configureStore'
import FormSignUp from '../containers/form-sign-up'

const propTypes = {
  routing: React.PropTypes.object.isRequired
}

const SignUp = props => {
  const store = configureStore()

  return (
    <Provider store={store}>
      <div className="row">
        <h2 className="title">Sign Up</h2>
        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lacus vel augue aliquet luctus. Ut urna libero.</p>

        <FormSignUp routing={props}/>
      </div>
    </Provider>
  )
}

export default SignUp
