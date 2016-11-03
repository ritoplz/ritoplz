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
    this.addLocation = this.addLocation.bind(this)

    this.state = {
      user: {
        username: '',
        email: '',
        emailConfirmed: '',
        location: {
          modal: false,
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
      const initialState = this.state.user
      const data = {
        username: res.data.name,
        email: res.data.email,
        emailConfirmed: res.data.emailConfirmed.toString()
      }

      const user = Object.assign(initialState, data)

      this.setState({user})
    })
  }

  addLocation () {
    const initialState = this.state.user.location
    const location = {
      modal: true
    }

    const nextState = Object.assign(initialState, location)
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
      console.log(res)

      const initialState = this.state.user.location
      const location = {
        modal: false
      }

      const nextState = Object.assign(initialState, location)
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
    const location = this.state.user.location
    const fullLocation = location.status ? `${location.city}, ${location.state} - ${location.country}` : 'Add your location'
    const hasSummoner = this.state.summoners.length > 0 ? <MySummoners summoners={this.state.summoners}/> : <EmptyState/>
    const countries = [
      {value: 'BR', label: 'Brazil'}
    ]
    const states = [
      {value: 'AC', label: 'Acre'},
      {value: 'AL', label: 'Alagoas'},
      {value: 'AM', label: 'Amazonas'},
      {value: 'AP', label: 'Amapá'},
      {value: 'BA', label: 'Bahia'},
      {value: 'CE', label: 'Ceará'},
      {value: 'DF', label: 'Distrito Federal'},
      {value: 'ES', label: 'Espírito Santo'},
      {value: 'GO', label: 'Goiás'},
      {value: 'MA', label: 'Maranhão'},
      {value: 'MG', label: 'Minas Gerais'},
      {value: 'MS', label: 'Mato Grosso do Sul'},
      {value: 'MT', label: 'Mato Grosso'},
      {value: 'PA', label: 'Pará'},
      {value: 'PB', label: 'Paraíba'},
      {value: 'PE', label: 'Pernambuco'},
      {value: 'PI', label: 'Piauí'},
      {value: 'PR', label: 'Paraná'},
      {value: 'RJ', label: 'Rio de Janeiro'},
      {value: 'RN', label: 'Rio Grande do Norte'},
      {value: 'RO', label: 'Rondônia'},
      {value: 'RR', label: 'Roraima'},
      {value: 'RS', label: 'Rio Grande do Sul'},
      {value: 'SC', label: 'Santa Catarina'},
      {value: 'SE', label: 'Sergipe'},
      {value: 'SP', label: 'São Paulo'},
      {value: 'TO', label: 'Tocantins'},
    ]

    const cities = [
      {value: 'SP', label: 'Sao Paulo'}
    ]

    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="https://unpkg.com/react-select/dist/react-select.css"/>
          <meta charset="utf-8" />
        </Head>

        <div className={style(styles.row)}>
          <Intro user={this.state.user.username} location={fullLocation} addLocation={this.addLocation}/>
          
          {hasSummoner}

          <ModalAddLocation handleSubmit={this.submitLocation} modal={this.state.user.location.modal} countries={countries} states={states} cities={cities} />
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
