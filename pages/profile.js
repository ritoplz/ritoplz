'use strict'

import React, {Component} from 'react'
import axios from 'axios'
import { style, insertRule } from 'next/css'
import Head from 'next/head'

import Intro from '../components/intro'
import EmptyState from '../components/empty-state'
import MySummoners from '../components/my-summoners'
import ModalAddLocation from '../components/modal-add-location'

export default class extends Component {
  constructor (props) {
    super(props)
    this.submitSummoner = this.submitSummoner.bind(this)
    this.openModalLocation = this.openModalLocation.bind(this)
    this.submitLocation = this.submitLocation.bind(this)

    this.state = {
      user: {
        name: '',
        email: '',
        emailConfirmed: '',
        modal: false,
        country: '',
        state: '',
        city: '',
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
      const initialState = this.state.user
      const data = res.data
      const nextState = Object.assign(initialState, data)

      this.setState({nextState})

      console.log(this.state)
    })
  }

  openModalLocation () {
    const initialState = this.state.user
    const modalStatus = {modal: true}
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
        'Authorization': localStorageRef
      }
    }).then(res => {
      const initialState = this.state.user
      const data = res.data.user
      const modalStatus = {modal: false}
      const nextState = Object.assign(initialState, data, modalStatus)

      this.setState({nextState})
    }).catch(err => {
      console.log(err)
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
    const location = this.state.user
    const fullLocation = location.city.length > 0 ? `${location.city}, ${location.state} - ${location.country}` : 'Add your location'
    const hasSummoner = this.state.summoners.length > 0 ? <MySummoners summoners={this.state.summoners}/> : <EmptyState/>
    const countries = [
      {value: 'BR', label: 'Brazil'}
    ]
    const states = [
      {value: 'Acre', label: 'Acre'},
      {value: 'Alagoas', label: 'Alagoas'},
      {value: 'Amazonas', label: 'Amazonas'},
      {value: 'Amapá', label: 'Amapá'},
      {value: 'Bahia', label: 'Bahia'},
      {value: 'Ceará', label: 'Ceará'},
      {value: 'Distrito Federal', label: 'Distrito Federal'},
      {value: 'Espírito Santo', label: 'Espírito Santo'},
      {value: 'Goiás', label: 'Goiás'},
      {value: 'Maranhão', label: 'Maranhão'},
      {value: 'Minas Gerais', label: 'Minas Gerais'},
      {value: 'Mato Grosso do Sul', label: 'Mato Grosso do Sul'},
      {value: 'Mato Grosso', label: 'Mato Grosso'},
      {value: 'Pará', label: 'Pará'},
      {value: 'Paraíba', label: 'Paraíba'},
      {value: 'Pernambuco', label: 'Pernambuco'},
      {value: 'Piauí', label: 'Piauí'},
      {value: 'Paraná', label: 'Paraná'},
      {value: 'Rio de Janeiro', label: 'Rio de Janeiro'},
      {value: 'Rio Grande do Norte', label: 'Rio Grande do Norte'},
      {value: 'Rondônia', label: 'Rondônia'},
      {value: 'Roraima', label: 'Roraima'},
      {value: 'Rio Grande do Sul', label: 'Rio Grande do Sul'},
      {value: 'Santa Catarina', label: 'Santa Catarina'},
      {value: 'Sergipe', label: 'Sergipe'},
      {value: 'São Paulo', label: 'São Paulo'},
      {value: 'Tocantins', label: 'Tocantins'},
    ]

    const cities = [
      {value: 'São Paulo', label: 'São Paulo'}
    ]

    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="https://unpkg.com/react-select/dist/react-select.css"/>
          <meta charSet='utf-8'/>
        </Head>

        <div className={style(styles.row)}>
          <Intro user={this.state.user.name} location={fullLocation} openModalLocation={this.openModalLocation}/>
          
          {hasSummoner}

          <ModalAddLocation handleSubmit={this.submitLocation} modal={this.state.user.modal} countries={countries} states={states} cities={cities} />
        </div>
      </div>
    )
  }
}

insertRule('* {padding: 0; margin: 0; box-sizing: border-box; font-family: Source Sans Pro, Helvetica Neue, Helvetica }')

const styles = {
  row: {
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'Source Sans Pro'
  }
}
