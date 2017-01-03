'use strict'

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Link from 'next/link'
import Head from 'next/head'
import { style, insertRule } from 'next/css'

import Meta from '../components/meta'
import configureStore from '../store/configureStore'
import FormSignup from '../containers/form-signup'
import Header from '../components/header'
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

const Signup = props => {
  const store = configureStore()

  return (
    <Provider store={store}>
      <div>
        <Meta />

        <Header page="signup"/>

        <section className={style(styles.row)}>
          <h1 className={style(styles.title)}>Join our Ranking!</h1>
          <h2 className={style(styles.subtitle)}>Enter your info below to sign up.</h2>

          <FormSignup routing={props}/>
        </section>

        <Footer />
      </div>
    </Provider>
  )
}

insertRule('* {padding: 0; margin: 0; box-sizing: border-box; font-family: Source Sans Pro, Helvetica Neue, Helvetica } li { list-style: none } a { text-decoration: none}')

export default Signup
