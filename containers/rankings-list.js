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

class RankingsList extends Component {
  constructor() {
    super()

    this.handleFeatured = this.handleFeatured.bind(this)

    this.state = {
      summoners: [],
      featured: {},
      fetched: false
    }
  }

  componentDidMount() {
    this.props.fetchRankings().then(() => {
      this.setState({fetched: true})
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({summoners: nextProps.rankings.data.summoners})

    if(this.state.summoners.length > 0) {
      this.handleFeatured()
    }
  }

  handleFeatured (index = 0) {
    this.setState({
      featuredPosition: index + 1,
      featured: this.state.summoners[index]
    })
  }

  render () {
    let rankingList
    let featured

    if(this.state.fetched) {
      rankingList = (
        <div>
          <Featured data={this.state.featured} position={this.state.featuredPosition}/>

          <Filter fetchRankings={this.props.fetchRankings}/>

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
