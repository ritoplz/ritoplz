'use strict'

import React from 'react'
import { Provider } from 'react-redux'
import Link from 'next/link'
import Head from 'next/head'
import { style } from 'next/css'

import Meta from '../components/meta'
import configureStore from '../store/configureStore'
import FormLogin from '../containers/form-login'
import Header from '../components/header'
import { isLogged } from './../services/auth'
import Footer from '../components/footer'

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

  if (isLogged()) {
    props.url.replaceTo('/profile')
  }

  return (
    <Provider store={store}>
      <div>
        <Meta />

        <Header page="login"/>

        <section className={style(styles.row)}>
          <h1 className={style(styles.title)}>Nice to see you today!</h1>
          <h2 className={style(styles.subtitle)}>Enter your info below to login.</h2>

          <FormLogin routing={props}/>
        </section>

        <Footer />
      </div>
    </Provider>
  )
}

export default Login
