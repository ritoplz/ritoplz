
'use strict'

import React, { Component } from 'react'
import { style } from 'next/css'
import { connect } from 'react-redux'

import fetchRankings from '../actions/fetch-rankings'
import Header from './../components/header'
import Featured from './../components/featured'
import RankingUser from './../components/ranking-user'
import Filter from './../components/filter'
import Loading from './../components/loading'

const styles = {
  title: {
    textAlign: 'center',
    fontWeight: '300',
    fontSize: '3rem',
    color: '#333',
    paddingTop: '75px',
    paddingBottom: '75px'
  }
}

class RankingsList extends Component {
  static async getInitialProps () {
    const res = await this.props.fetchRankings()

    return { rankingz: res.data }
  }

  constructor() {
    super()

    this.state = {
      summoners: [],
      featured: {},
      fetched: false
    }
  }

  componentDidMount() {
    this.props.fetchRankings().then(res => {
      this.setState({fetched: true})
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({summoners: nextProps.rankings.data.summoners})
  }

  render () {
    let rankingList
    let featured

    if(this.state.fetched) {
      rankingList = (
        <div>
          <Filter fetchRankings={this.props.fetchRankings} summoners={this.state.summoners}/>

          <ul>
            {this.state.summoners.map((summoner, i) => {
              return <RankingUser data={summoner} key={summoner._id} position={i + 1}/>
            })}
          </ul>
        </div>
      )
    } else {
      rankingList = <Loading />
    }

    return (
      <div>
        <h2 className={style(styles.title)}>Rankings</h2>
        {rankingList}
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
    fetchRankings: params => dispatch(fetchRankings(params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RankingsList)
