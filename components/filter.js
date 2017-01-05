'use strict'

import React, { Component } from 'react'
import Select from 'react-select'
import { style } from 'next/css'

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
  render () {
    const countryList = [
      {value: 'BR', label: 'Brazil'},
      {value: 'United States', label: 'United States'}
    ]

    const stateList = [
      {value: 'São Paulo', label: 'São Paulo'}
    ]

    const cityList = [
      {value: 'São Paulo', label: 'São Paulo'}
    ]

    return (
      <section className={style(styles.filter)}>
        <div className={style(styles.input)}>
          <Select options={countryList} />
        </div>

        <div className={style(styles.input)}>
          <Select options={stateList} />
        </div>

        <div className={style(styles.input)}>
          <Select options={cityList} />
        </div>
      </section>
    )
  }
}

export default Filter
