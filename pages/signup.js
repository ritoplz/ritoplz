'use strict'

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Link from 'next/link'
import Head from 'next/head'

import Meta from '../components/meta'
import configureStore from '../store/configureStore'
import FormSignup from '../containers/form-signup'
import Header from '../components/header'
import Footer from '../components/footer'

const styles = {

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

        <section className="row">
          <h1 className="title">Entre no nosso Rankings!</h1>
          <h2 className="subtitle">Preencha os campos abaixo para se cadastrar</h2>

          <FormSignup routing={props}/>

          <p className="disclaimer">*Nós nunca iremos pedir nenhuma informação credencial do League of Legends.</p>
        </section>

        <Footer />

        <style jsx>{`
          .row {
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
          }

          .title {
            color: #333;
            font-weight: 300;
            font-size: 3rem;
            text-align: center;
            margin-top: 50px;
          }

          .subtitle {
            color: #ccc;
            font-weight: 300;
            font-size: 1.15rem;
            text-align: center;
            margin-bottom: 50px;
            margin-top: 5px;
          }

          .disclaimer {
            color: red;
            margin-top: -30px;
            margin-bottom: 50px;
            opacity: .5;
            text-align: center;
          }
        `}</style>
      </div>
    </Provider>
  )
}

export default Signup
