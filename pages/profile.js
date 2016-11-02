'use strict'

import React, {Component} from 'react'
import axios from 'axios'
import Modal from 'react-modal'
import {style} from 'next/css'

import Intro from '../components/intro'
import EmptyState from '../components/empty-state'
import MySummoners from '../components/my-summoners'


export default class extends Component {
  constructor (props) {
    super(props)
    this.submitSummoner = this.submitSummoner.bind(this)

    this.state = {
      user: {
        username: '',
        email: '',
        emailConfirmed: '',
        location: {
          status: false,
          country: '',
          state: '',
          city: ''
        }
      },
      summoners: [],
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
      const clone = this.state.user
      const data = {
        username: res.data.name,
        email: res.data.email,
        emailConfirmed: res.data.emailConfirmed.toString()
      }

      const user = Object.assign(clone, data)

      this.setState({user})
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
    const location = this.state.user.location
    const fullLocation = location.status ? `${location.city}, ${location.state} - ${location.country}` : 'Add your location'
    const hasSummoner = this.state.summoners.length > 0 ? <MySummoners summoners={this.state.summoners}/> : <EmptyState/>

    return (
      <div className={style(styles.row)}>
        <Intro user={this.state.user.username} location={fullLocation}/>
        
        {hasSummoner}
      </div>
    )
  }
}

const styles = {
  row: {
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'Source Sans Pro'
  }
}
