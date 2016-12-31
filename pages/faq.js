'use strict'

import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { style, insertRule } from 'next/css'

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

  question: {
    fontWeight: '600',
    color: '#333',
    fontSize: '1.25rem',
    marginBottom: '15px'
  },

  text: {
    fontSize: '1rem',
    lineHeight: '1.75rem',
    color: '#777',
    marginBottom: '25px',
    fontWeight: '400'
  }
}

const Faq = props => {
  return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="stylesheet" href="/static/stylesheets/vendors/alert/alert.css"/>
          <meta charSet="utf-8"/>
        </Head>

        <Header page="signup"/>

        <section className={style(styles.row)}>
          <h1 className={style(styles.title)}>FAQ</h1>
          <h3 className={style(styles.subtitle)}>Frequently Asked Questions</h3>

          <h2 className={style(styles.question)}>1. Will you support other regions such as NA?</h2>
          <p className={style(styles.text)}>Surely, we are in the process of adding support for more regions, you can expect to have them in the coming weeks.</p>

          <h2 className={style(styles.question)}>2. Will you support other type of queues and rankings?</h2>
          <p className={style(styles.text)}>Yes, we are also in the process of adding more types of rankings such as Champion Maestry per region, Best Duo players per region, Victory streak and more, you can expect to have these functionality in the coming months.</p>

          <h2 className={style(styles.question)}>3. I couldn't find my city or state, what should I do?</h2>
          <p className={style(styles.text)}>Yes, we are also in the process of adding more types of rankings such as Champion Maestry per region, Best Duo players per region, Victory streak and more, you can expect to have these functionality in the coming months.</p>

          <h2 className={style(styles.question)}>4. Can I change my location?</h2>
          <p className={style(styles.text)}>You are able to change you location anytime you want, just note that you will be part of the rankings of the newest selected region. At the moment we allow users to change their location only three times. Please, contact us if you selected the wrong location.</p>
        </section>

        <Footer />
      </div>
  )
}

insertRule('* {padding: 0; margin: 0; box-sizing: border-box; font-family: Source Sans Pro, Helvetica Neue, Helvetica } li { list-style: none } a { text-decoration: none}')

export default Faq
