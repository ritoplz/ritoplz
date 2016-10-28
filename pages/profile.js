'use strict'

import React, {Component} from 'react'
import axios from 'axios'

export default class extends Component {
  constructor (props) {
    super(props)
    this.submitSummoner = this.submitSummoner.bind(this)
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

          <form className='registration-form' onSubmit={this.submitSummoner}>
            <fieldset className='form-input'>
              <label className='label'>Summoner Name</label>
              <input className='input' type='text' name="name" ref={input => {this.name = input}} />
            </fieldset>

            <button className='btn -secondary -large' type='submit'>Add Summoner</button>
          </form>
        </div>
      </div>
    )
  }
}
