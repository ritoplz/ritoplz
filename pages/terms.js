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

  exhibit: {
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

const Terms = props => {
  return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="stylesheet" href="/static/stylesheets/vendors/alert/alert.css"/>
          <meta charSet="utf-8"/>
        </Head>

        <Header page="signup"/>

        <section className={style(styles.row)}>
          <h1 className={style(styles.title)}>Terms of Services</h1>
          <h3 className={style(styles.subtitle)}>Last updated: Dec 31, 2016</h3>

          <h2 className={style(styles.exhibit)}>1. Acceptance of Terms.</h2>
          <p className={style(styles.text)}>1.1. Ritoplz ("Company" or "we") provides its Service (as defined below) to you through its web site and platform located at https://ritoplz.com (the "Site"), subject to this Terms of Service agreement ("TOS"). By accepting this TOS or by accessing or using the Service or Site, you acknowledge that you have read, understood, and agree to be bound by this TOS. If you are entering into this TOS on behalf of a company, business or other legal entity, you represent that you have the authority to bind such entity and its affiliates to this TOS, in which case the terms "you" or "your" shall refer to such entity and its affiliates. If you do not have such authority, or if you do not agree with this TOS, you must not accept this TOS and may not use the Service.</p>
          <p className={style(styles.text)}>1.2. Company may change this TOS from time to time by providing thirty (30) days prior notice either by emailing the email address associated with your account or by posting a notice on the Site. You can review the most current version of this TOS at any time [at https://ritoplz.com/terms]. The revised terms and conditions will become effective thirty (30) days after we post or send you notice of such changes, and if you use the Service after that date, your use will constitute acceptance of the revised terms and conditions. If any change to this TOS is not acceptable to you, your only remedy is stop using the Services and send a cancellation email to ritoplz@gmail.com.</p>

          <h2 className={style(styles.exhibit)}>2. Description of Service.</h2>

          <h2 className={style(styles.exhibit)}>3. General Conditions/ Access and Use of the Service.</h2>

          <h2 className={style(styles.exhibit)}>4. Termination.</h2>
        </section>

        <Footer />
      </div>
  )
}

insertRule('* {padding: 0; margin: 0; box-sizing: border-box; font-family: Source Sans Pro, Helvetica Neue, Helvetica } li { list-style: none } a { text-decoration: none}')

export default Terms
