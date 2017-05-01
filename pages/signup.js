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

          .disclaimer {
            color: red;
            marginTop: -30px;
            marginBottom: 50px;
            opacity: .5;
            textAlign: center;
          }
        `}</style>
      </div>
    </Provider>
  )
}

export default Signup
