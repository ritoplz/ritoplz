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
          <h1 className={style(styles.title)}>Entre no nosso Rankings!</h1>
          <h2 className={style(styles.subtitle)}>Preencha os campos abaixo para se cadastrar</h2>

          <FormSignup routing={props}/>

          <p className={style(styles.disclaimer)}>*Nós nunca iremos pedir nenhuma informação credencial do League of Legends.</p>
        </section>

        <Footer />
      </div>
    </Provider>
  )
}

export default Signup
