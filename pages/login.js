'use strict'

import React from 'react'
import { Provider } from 'react-redux'
import Link from 'next/link'
import { style, insertRule } from 'next/css'

import configureStore from '../store/configureStore'
import FormLogin from '../containers/form-login'
import Header from '../components/header'

const styles = {
  row: {
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  title: {
    color: '#333',
    fontWeight: '300',
    fontSize: '3rem',
    textAlign: 'center',
    marginTop: '50px'
  },

  subtitle: {
    color: '#ccc',
    fontWeight: '300',
    fontSize: '1.15rem',
    textAlign: 'center',
    marginBottom: '50px',
    marginTop: '5px'
  }
}

const Login = props => {
  const store = configureStore()

  return (
    <Provider store={store}>
      <div>
        <Header page="login"/>

        <section className={style(styles.row)}>
          <h1 className={style(styles.title)}>Nice to see you today!</h1>
          <h2 className={style(styles.subtitle)}>Enter your info below to login.</h2>

          <FormLogin routing={props}/>
        </section>
      </div>
    </Provider>
  )
}

insertRule('* {padding: 0; margin: 0; box-sizing: border-box; font-family: Source Sans Pro, Helvetica Neue, Helvetica } li {list-style: none}')

export default Login
