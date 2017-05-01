'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import cookie from 'react-cookie'
import Alert from 'react-s-alert'

import loginRequest from '../actions/login'
import { LOGIN_SUCCESS, LOGIN_ERROR } from './../constants'
import { setToken } from './../services/auth'

class FormLogin extends Component {
  constructor() {
    super()

    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin(e) {
    e.preventDefault()

    const userData = {
      email: this.email.value,
      password: this.password.value
    }

    this.props.loginRequest(userData)
      .then(({ data, type }) => {
        const token = data.token

        if (type === LOGIN_SUCCESS) {
          setToken(token)
          this.props.routing.url.replaceTo('/profile')
        }

        if (type === LOGIN_ERROR) {
          Alert.error(data, {position: 'top-right'})
        }
      })
  }

  render() {
    return (
      <form className="loginForm" onSubmit={this.handleLogin}>
        <fieldset className="formInput">
          <label className="label">E-mail</label>
          <input className="input" type="email" name="email" ref={input => this.email = input}/>
        </fieldset>

        <fieldset className="formInput">
          <label className="label">Senha</label>
          <input className="input" type="password" name="password" ref={input => this.password = input}/>
        </fieldset>

        <button className="btn" type="submit">Entrar</button>

        <Alert effect="jelly" stack={{limit: 3}}/>

        <style jsx>{`
          .loginForm {
            max-width: 60%;
            margin-left: auto;
            margin-right: auto;
            padding-bottom: 50px;
          }

          .formInput {
            border: none;
            margin-bottom: 25px;
          }

          .label {
            display: block;
            font-size: 1rem;
            font-weight: 500;
            margin-bottom: 10px;
          }

          .input {
            width: 100%;
            height: 55px;
            border-radius: 4px;
            border: 1px solid #f2f2f2;
            padding: 15px;
            font-size: 1.15rem;
            outline: none;
            color: #333;
            transition: .25s;
          }

          .btn {
            width: 100%;
            color: #fff;
            border: none;
            border-radius: 5px;
            padding: 10px 25px;
            font-size: .9rem;
            height: 55px;
            margin-top: 25px;
            font-weight: 500;
            cursor: pointer;
            background: linear-gradient(to right, #52bdab 0%,#6BB6D6 100%);
          }
        `}</style>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginRequest: userData => dispatch(loginRequest(userData))
  }
}

export default connect(null, mapDispatchToProps)(FormLogin)
