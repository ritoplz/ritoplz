'use strict'

import React, { Component } from 'react'
import Select from 'react-select'
import { style } from 'next/css'
import { countries, locations } from '../services/places'

const styles = {
  filter: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '30px'
  },

  input: {
    flexBasis: '30%'
  }
}

class Filter extends Component {
  constructor () {
    super()

    this.state = {
      countryList: countries,
      stateList: null,
      cityList: null,
      country: null,
      state: null,
      city: null,
    }

    this.handleCountry = this.handleCountry.bind(this)
    this.handleState = this.handleState.bind(this)
    this.handleCity = this.handleCity.bind(this)
  }

  handleCountry (e) {
    this.setState({
      country: e.value,
      stateList: locations[e.value]
    })
  }

  handleState (e) {
    const city = locations[this.state.country].filter(state => state.value === e.value)

    this.setState({
      state: e.value,
      cityList: city[0].cities
    })
  }

  handleCity (e) {
    this.setState({city: e.value})
  }

  render () {
    return (
      <section className={style(styles.filter)}>
        <div className={style(styles.input)}>
          <Select options={this.state.countryList} value={this.state.country} onChange={this.handleCountry} placeholder="Select country..."/>
        </div>

        <div className={style(styles.input)}>
          <Select options={this.state.stateList} value={this.state.state} onChange={this.handleState} placeholder="Select state..."/>
        </div>

        <div className={style(styles.input)}>
          <Select options={this.state.cityList} value={this.state.city} onChange={this.handleCity} placeholder="Select city..."/>
        </div>
      </section>
    )
  }
}

export default Filter
