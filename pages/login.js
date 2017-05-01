'use strict'

import React from 'react'
import { Provider } from 'react-redux'
import Link from 'next/link'
import Head from 'next/head'

import Meta from '../components/meta'
import configureStore from '../store/configureStore'
import FormLogin from '../containers/form-login'
import Header from '../components/header'
import { isLogged } from './../services/auth'
import Footer from '../components/footer'

const Login = props => {
  const store = configureStore()
  const items = [
    {name: 'Rankings', link: 'rankings', type: 'item'},
    {name: 'Cadastrar', link: 'signup', type: 'item'}
  ]

  if (isLogged()) {
    props.url.replaceTo('/profile')
  }

  return (
    <Provider store={store}>
      <div>
        <Meta />

        <Header items={items} />

        <section className="row">
          <h1 className="title">Que bom te ver hoje!</h1>
          <h2 className="subtitle">Entre no Ritoplz Rankings</h2>

          <FormLogin routing={props}/>
        </section>

        <Footer />

        <style jsx>{`
          .row {
            maxWidth: 900px;
            marginLeft: auto;
            marginRight: auto;
          }

          .title {
            color: #333;
            fontWeight: 300;
            fontSize: 3rem;
            textAlign: center;
            marginTop: 50px;
          }

          .subtitle {
            color: #ccc;
            fontWeight: 300;
            fontSize: 1.15rem;
            textAlign: center;
            marginBottom: 50px;
            marginTop: 5px;
          }
        `}</style>
      </div>
    </Provider>
  )
}

export default Login
