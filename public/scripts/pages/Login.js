'use strict'

import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import qs from 'querystring'
import url from 'url'

export default class Login extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.submitLogin = this.submitLogin.bind(this)
    this.facebookLogin = this.facebookLogin.bind(this)

    this.state = {email: '', password: ''}
  }

  facebookLogin() {
    const facebook = {
      url: 'http://localhost:3000/auth/facebook',
      clientId: '980220002068787',
      redirectUri: 'http://localhost:3000/auth/facebook/callback',
      authorizationUrl: 'https://www.facebook.com/v2.5/dialog/oauth',
      scope: 'email,user_location',
      width: 580,
      height: 400
    }

    const oauth2 = (config) => {
      return new Promise((resolve, reject) => {
        const params = {
          client_id: config.clientId,
          redirect_uri: config.redirectUri,
          scope: config.scope,
          display: 'popup',
          response_type: 'code'
        }

        const url = config.authorizationUrl + '?' + qs.stringify(params)
        resolve({url: url, config: config})
      })
    }

    const openPopup = ({ url, config }) => {
      return new Promise((resolve, reject) => {
        const width = config.width || 500;
        const height = config.height || 500;
        const options = {
          width: width,
          height: height,
          top: window.screenY + ((window.outerHeight - height) / 2.5),
          left: window.screenX + ((window.outerWidth - width) / 2)
        }

        const popup = window.open(url, '_blank', qs.stringify(options, ','))

        if (url === 'about:blank') {
          popup.document.body.innerHTML = 'Loading...'
        }

        resolve({ window: popup, config: config})
      })
    }

    const pollPopup = ({ window, config, requestToken }) => {
      return new Promise((resolve, reject) => {
        const redirectUri = url.parse(config.redirectUri)
        const redirectUriPath = redirectUri.host + redirectUri.pathname

        if (requestToken) {
          window.location = config.authorizationUrl + '?' + qs.stringify(requestToken)
        }

        const polling = setInterval(() => {
          if (!window || window.closed) {
            clearInterval(polling)
          }
          try {
            const popupUrlPath = window.location.host + window.location.pathname
            if (popupUrlPath === redirectUriPath) {
              if (window.location.search || window.location.hash) {
                const query = qs.parse(window.location.search.substring(1).replace(/\/$/, ''))
                const hash = qs.parse(window.location.hash.substring(1).replace(/[\/$]/, ''))
                const params = Object.assign({}, query, hash)
              }
            }
          } catch (error) {
            // Ignore DOMException: Blocked a frame with origin from accessing a cross-origin frame.
            // A hack to get around same-origin security policy errors in Internet Explorer.
          }
        }, 500);
      });
    }

    const exchangeCodeForToken = ({ oauthData, config, window, interval }) => {
      return new Promise((resolve, reject) => {
        const data = Object.assign({}, oauthData, config)

        return fetch(config.url, {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'same-origin', // By default, fetch won't send any cookies to the server
          body: JSON.stringify(data)
        }).then((response) => {
          if (response.ok) {
            return response.json().then((json) => {
              resolve({ token: json.token, user: json.user, window: window, interval: interval })
            })
          }
        })
      })
    }

    const signIn = ({ token, user, window, interval }) => {
      return new Promise((resolve, reject) => {
        browserHistory.push('/profile')
        resolve({ window: window, interval: interval })
      })
    }

    const closePopup = ({ window, interval }) => {
      return new Promise((resolve, reject) => {
        clearInterval(interval)
        window.close()
        resolve()
      })
    }

    oauth2(facebook)
      .then(openPopup)
      .then(pollPopup)
      .then(exchangeCodeForToken)
      .then(signIn)
      .then(closePopup)
  }

  handleChange (e) {
    this.setState({[e.target.name]: e.target.value})

    console.log(this.state)
  }

  submitLogin (e) {
    e.preventDefault()

    return fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    }).then((res) => {
      
    })
  }

  render () {
    return (
      <div>
        <div className='row'>
          <h2 className='title'>Login</h2>
          <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lacus vel augue aliquet luctus. Ut urna libero.</p>

          <form className='registration-form' onSubmit={this.submitLogin}>
            <fieldset className='form-input'>
              <label className='label'>E-mail</label>
              <input className='input' type='text' name='email' onChange={this.handleChange} />
            </fieldset>

            <fieldset className='form-input'>
              <label className='label'>Password</label>
              <input className='input' type='password' name='password' onChange={this.handleChange} />
            </fieldset>

            <button className='btn -secondary -large' type='submit'>Login</button>

          </form>
            
          <button onClick={this.facebookLogin}>Faceboooooook</button>
        </div>
      </div>
    )
  }
}
