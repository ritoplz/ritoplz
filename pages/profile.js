'use strict'

/* global localStorage: false */

import React, { Component } from 'react'
import axios from 'axios'
import { style, insertRule } from 'next/css'
import Head from 'next/head'
import { Notification } from 'react-notification'

import Intro from '../components/intro'
import EmptyState from '../components/empty-state'
import MySummoners from '../components/my-summoners'
import ModalAddLocation from '../components/modal-add-location'
import ModalAddSummoner from '../components/modal-add-summoner'

const styles = {
  row: {
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'Source Sans Pro'
  },

  notification: {
    backgroundColor: 'red'
  }
}

export default class extends Component {
  constructor (props) {
    super(props)
    this.submitSummoner = this.submitSummoner.bind(this)
    this.submitLocation = this.submitLocation.bind(this)
    this.openModalLocation = this.openModalLocation.bind(this)
    this.openModalSummoner = this.openModalSummoner.bind(this)

    this.state = {
      user: {
        name: '',
        email: '',
        emailConfirmed: '',
        country: '',
        state: '',
        city: ''
      },
      summoners: [],
      modals: {
        addLocation: false,
        addSummoner: false
      },
      notifications: {
        addSummonerSuccess: false
      },
      profileReceived: false
    }
  }

  componentDidMount() {
    const localStorageRef = localStorage.getItem('token')

    axios.get('http://localhost:3001/account', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorageRef
      }
    })
    .then(res => {
      console.log(res)
      const initialState = this.state
      const data = res.data
      const nextState = Object.assign(initialState, data)

      this.setState({nextState})
    })
  }

  openModalLocation () {
    const initialState = this.state.modals
    const modalStatus = {addLocation: true}
    const nextState = Object.assign(initialState, modalStatus)

    this.setState({nextState})
  }

  openModalSummoner () {
    const initialState = this.state.modals
    const modalStatus = {addSummoner: true}
    const nextState = Object.assign(initialState, modalStatus)

    this.setState({nextState})
  }

  submitLocation (e) {
    const localStorageRef = localStorage.getItem('token')

    axios({
      method: 'put',
      url: 'http://localhost:3001/account',
      data: {
        country: e.country,
        state: e.state,
        city: e.city
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorageRef
      }
    }).then(res => {
      const initialState = this.state
      const modals = this.state.modals
      const modalStatus = {addLocation: false}
      const user = this.state.user
      const data = res.data.user
      const handleData = {
        modals: Object.assign(modals, modalStatus),
        user: Object.assign(user, data)
      }
      const nextState = Object.assign(initialState, handleData)

      this.setState({nextState})
    }).catch(err => {
      console.log(err)
    })
  }

  submitSummoner (summoner) {
    const localStorageRef = localStorage.getItem('token')

    axios({
      method: 'post',
      url: 'http://localhost:3001/summoner',
      data: {name: summoner},
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorageRef
      }
    }).then(res => {
      const initialState = this.state
      const modals = this.state.modals
      const notifications = this.state.notifications
      const modalStatus = {addSummoner: false}
      const notificationStatus = {addSummonerSuccess: true}
      const summoners = this.state.summoners
      let data = res.data
      data = {cover: '/static/ashe.png', status: false, name: 'Nicole', code: data.code}
      const handleData = {
        modals: Object.assign(modals, modalStatus),
        summoners: [Object.assign(summoners, data)],
        notifications: Object.assign(notifications, notificationStatus)
      }
      const nextState = Object.assign(initialState, handleData)

      this.setState({nextState})
    }).catch(err => {
      console.log(err)
    })
  }

  render () {
    const location = this.state.user
    const fullLocation = location.city.length > 0 ? `${location.city}, ${location.state} - ${location.country}` : 'Add your location'
    const hasSummoner = this.state.summoners.length > 0 ? <MySummoners summoners={this.state.summoners} handleModalSummoner={this.openModalSummoner}/> : <EmptyState handleModalSummoner={this.openModalSummoner}/>
    const countries = [
      {value: 'BR', label: 'Brazil'}
    ]
    const states = require('../helpers/br/cities.json')

    const cities = [
      {value: 'São Paulo', label: 'São Paulo'}
    ]

    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="stylesheet" href="https://unpkg.com/react-select/dist/react-select.css"/>
          <meta charSet="utf-8"/>
        </Head>

        <div className={style(styles.row)}>
          <Intro user={this.state.user.name} location={fullLocation} openModalLocation={this.openModalLocation}/>

          {hasSummoner}

          <ModalAddLocation handleSubmit={this.submitLocation} modal={this.state.modals.addLocation} countries={countries} states={states} cities={cities}/>
          <ModalAddSummoner handleSubmit={this.submitSummoner} modal={this.state.modals.addSummoner}/>
          <Notification isActive={this.state.notifications.addSummonerSuccess} message={'Summoner added successfully'} action={'dismiss'}/>
        </div>
      </div>
    )
  }
}

insertRule('* {padding: 0; margin: 0; box-sizing: border-box; font-family: Source Sans Pro, Helvetica Neue, Helvetica }')
