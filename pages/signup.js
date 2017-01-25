'use strict'

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Link from 'next/link'
import Head from 'next/head'
import { style } from 'next/css'

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
  },

  disclaimer: {
    color: 'red',
    marginTop: '-30px',
    marginBottom: '50px',
    opacity: '.5',
    textAlign: 'center'
  }
}

const Signup = props => {
  const store = configureStore()
  const items = [
    {name: 'Rankings', link: 'rankings', type: 'item'},
    {name: 'Login', link: 'login', type: 'item'}
  ]

  return (
    <Provider store={store}>
      <div>
        <Meta />

        <Header items={items} />

        <section className={style(styles.row)}>
          <h1 className={style(styles.title)}>Join our Ranking!</h1>
          <h2 className={style(styles.subtitle)}>Enter your info below to sign up.</h2>

          <FormSignup routing={props}/>

          <p className={style(styles.disclaimer)}>*We will never ask for any League of Legends credentials.</p>
        </section>

        <Footer />
      </div>
    </Provider>
  )
}

export default Signup
