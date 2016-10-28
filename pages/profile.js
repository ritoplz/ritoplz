'use strict'

import React, {Component} from 'react'
import axios from 'axios'

export default class extends Component {
  constructor (props) {
    super(props)
    this.submitSummoner = this.submitSummoner.bind(this)

    this.state = {
      user: {
        username: '',
        email: '',
        emailConfirmed: ''
      },
      summoner: {
        code: ''
      },
      profileReceived: false
    }
  }
  
  componentDidMount() {
    const localStorageRef = localStorage.getItem('token')

    axios.get('http://localhost:3001/account', {
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': localStorageRef
      }
    })
    .then(res => {
      console.log(res)

      this.setState({
        user: {
          username: res.data.name,
          email: res.data.email,
          emailConfirmed: res.data.emailConfirmed.toString()
        }
      })
    })
  }

  submitSummoner (e) {
    e.preventDefault()

    const localStorageRef = localStorage.getItem('token')

    axios({
      method: 'post',
      url: 'http://localhost:3001/summoner',
      data: {
        name: this.name.value
      },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorageRef
      }
    }).then(res => {
      console.log(res)

      this.setState({
        summoner: {
          code: res.data.code
        }
      })
    }).catch(err => {
      console.log(err)
    })
  }

  render () {
    return (
      <div>
        <div className='row'>
          <h2 className='title'>Profile</h2>
          <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lacus vel augue aliquet luctus. Ut urna libero.</p>

          <header>
            <h1>Welcome {this.state.user.username}</h1>
            <h2>Email: {this.state.user.email}</h2>

            <h3>Email Confirmed: {this.state.user.emailConfirmed}</h3>
          </header>

          <form className='registration-form' onSubmit={this.submitSummoner}>
            <fieldset className='form-input'>
              <label className='label'>Summoner Name</label>
              <input className='input' type='text' name="name" ref={input => {this.name = input}} />
            </fieldset>

            <button className='btn -secondary -large' type='submit'>Add Summoner</button>
          </form>

          <h1>Summoner Code: {this.state.summoner.code}</h1>
        </div>
      </div>
    )
  }
}
