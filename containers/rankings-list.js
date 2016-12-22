'use strict'

import React, { Component } from 'react'
import { style, insertRule } from 'next/css'
import getTier from 'ritoplz-tier'
import { connect } from 'react-redux'

import fetchRankings from '../actions/fetch-rankings'
import Header from './../components/header'
import Featured from './../components/featured'
import RankingUser from './../components/ranking-user'

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

class RankingsList extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.fetchRankings()
  }

  render () {
    const flag = getTier('bronze').flag.small
    const rankingList = <h1>NO USERS</h1>

    return (
      <div>
        <ul className={style(styles.rankingList)}>
          {rankingList}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    rankings: state.rankings
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRankings: () => dispatch(fetchRankings())
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(RankingsList)
