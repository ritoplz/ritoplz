'use strict'

import React from 'react'
import { Provider } from 'react-redux'

import configureStore from '../store/configureStore'
import FormLogin from '../containers/form-login'

const Login = props => {
  const store = configureStore()

  return (
    <Provider store={store}>
      <div className="row">
        <h2 className="title">Login</h2>
        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lacus vel augue aliquet luctus. Ut urna libero.</p>

        <FormLogin routing={props}/>
      </div>
    </Provider>
  )
}

export default Login
