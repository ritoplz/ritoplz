
'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'

import fetchRankings from '../actions/fetch-rankings'
import RankingUser from './../components/ranking-user'
import UnrankedUser from './../components/unranked-user'
import Filter from './../components/filter'
import Loading from './../components/loading'

class RankingsList extends Component {
  constructor() {
    super()

    this.state = {
      summoners: [],
      unrankeds: [],
      selected: 'ranked',
      fetched: false,
      skip: 0,
      nextPage: false,
      location: false
    }

    this.changeList = this.changeList.bind(this)
    this.onFetchRankings = this.onFetchRankings.bind(this)
    this.handleLocation = this.handleLocation.bind(this)
  }

  componentDidMount() {
    this.onFetchRankings()
  }

  onFetchRankings () {
    let params

    if (this.state.location) {
      params = {
        country: 'BR',
        limit: 100,
        state: this.state.state,
        city: this.state.city,
        skip: this.state.skip
      }
    } else {
      params = {
        country: 'BR',
        limit: 100,
        skip: this.state.skip
      }
    }

    this.props.fetchRankings(params)
      .then(res => {
        this.setState({
          fetched: true,
          skip: this.state.skip + 100,
          nextPage: res.data.next_page,
          summoners: this.state.summoners.concat(res.data.summoners)
        })
      })
  }

  handleLocation (data = { state: undefined, city: undefined, summoners: [] }) {
    if (this.state.selected === 'ranked') {
      this.setState({
        summoners: data.summoners,
        state: data.state,
        city: data.city,
        location: true
      })
    } else {
      this.setState({
        unrankeds: data.summoners,
        state: data.state,
        city: data.city,
        location: true
      })
    }
  }

  changeList (type) {
    let params

    if (type === 'ranked') {
      params = {
        country: 'BR',
        limit: 100,
        skip: 0
      }
    } else {
      params = {
        country: 'BR',
        limit: 600,
        unrankeds: true
      }
    }

    this.props.fetchRankings(params)
      .then(res => {
        this.setState({
          fetched: true,
          summoners: res.data.summoners,
          unrankeds: res.data.summoners,
          selected: type
        })
      })
  }

  render () {
    let rankingList
    let list
    const loadMore = this.state.nextPage ? <button className="load" onClick={this.onFetchRankings}>Carregar mais</button> : ''

    if (this.state.fetched) {
      if (this.state.selected === 'ranked') {
        list = (
          <div>
            <ul>
              {this.state.summoners.map((summoner, i) => {
                return <RankingUser data={summoner} key={summoner._id + i} position={i + 1}/>
              })}
            </ul>
            {loadMore}
          </div>
        )
      } else {
        list = (
          <ul className="unrankedList">
            {this.state.unrankeds.map(summoner => {
              return <UnrankedUser data={summoner} key={summoner._id}/>
            })}
          </ul>
        )
      }

      rankingList = (
        <div>
          <Filter fetchRankings={this.props.fetchRankings} summoners={this.state.summoners} selected={this.state.selected} changeLocation={this.handleLocation}/>

          <nav className="tabs">
            <span className="tab" onClick={node => this.changeList('ranked')}>Ranked</span>
            <span className="tab" onClick={node => this.changeList('unranked')}>Unranked</span>
          </nav>

          {list}
        </div>
      )
    } else {
      rankingList = <Loading/>
    }

    return (
      <div>
        <h2 className="title">Rankings</h2>
        {rankingList}

        <style jsx>{`
          .title {
            textAlign: center;
            fontWeight: 300;
            fontSize: 3rem;
            color: #333;
            paddingTop: 75px;
            paddingBottom: 75px;
          }

          .unrankedList {
            display: flex;
            flexWrap: wrap;
            justifyContent: space-between;
          }

          .tab {
            width: 50%;
            display: inline-block;
            textAlign: center;
            height: 60px;
            lineHeight: 60px;
            fontSize: 1.25rem;
            color: #999;
            marginBottom: 40px;
            marginTop: 25px;
            cursor: pointer;
            transition: .15s;
          }

          .load {
            color: #fff;
            border: none;
            borderRadius: 5px;
            padding: 14px 28px;
            fontSize: 1rem;
            height: 55px;
            fontWeight: 500;
            cursor: pointer;
            width: 100%;
            marginTop: 10px;
            marginBottom: 50px;
            background: linear-gradient(to right, #52bdab 0%,#6BB6D6 100%);
          }
        `}</style>
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
