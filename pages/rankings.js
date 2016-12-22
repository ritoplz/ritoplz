'use strict'

import React, { Component } from 'react'
import { style, insertRule } from 'next/css'
import getTier from 'ritoplz-tier'
import axios from 'axios'

import Header from './../components/header'
import Featured from './../components/featured'
import RankingUser from './../components/ranking-user'
import configureStore from '../store/configureStore'

const styles = {
  ranking: {
    display: 'flex'
  },

  rankingList: {
    flexBasis: '40%',
    maxHeight: 'calc(100vh - 70px)',
    overflow: 'auto'
  }
}

const store = configureStore()

class Rankings extends Component {
  constructor() {
    super()

    store.subscribe(() => store.getState())

    this.state = {
      summoners: [],
      fetched: false
    }
  }

  componentDidMount() {
    return axios.get('https://staging.ritoplz.com/rankings?country=BR')
      .then(res => {
        this.setState({
          summoners: res.data.summoners,
          fetched: true
        })
      })
      .catch(err => console.log(err))
  }

  render () {
    const flag = getTier('bronze').flag.small
    let rankingList

    if(this.state.fetched) {
      rankingList = <h1>NO USERS</h1>
    } else {
      rankingList = this.state.summoners.map(summoner => {
        return <RankingUser avatar="https://s3.amazonaws.com/uifaces/faces/twitter/peterme/128.jpg" username="Sue Dixon" summoner="nicoleaniston" flag={flag} position={1}/>
      })  
    }

    return (
      <div>
        <Header />

        <section className={style(styles.ranking)}>
          <Featured />

          <ul className={style(styles.rankingList)}>
            {rankingList}
          </ul>
        </section>
      </div>
    )
  }
}

insertRule('* {padding: 0; margin: 0; box-sizing: border-box; font-family: Source Sans Pro, Helvetica Neue, Helvetica }')

export default Rankings
