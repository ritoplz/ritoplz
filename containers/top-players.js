'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'

import fetchRankings from '../actions/fetch-rankings'
import TopPlayer from './../components/top-player'
import Loading from './../components/loading'

class TopPlayers extends Component {
  constructor () {
    super()

    this.state = {
      summoners: [],
      fetched: false
    }
  }

  componentDidMount() {
    const params = {country: 'BR', limit: 6}

    this.props.fetchRankings(params).then(() => {
      this.setState({fetched: true})
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({summoners: nextProps.rankings.data.summoners})
  }

  render () {
    let rankingList

    if (this.state.fetched) {
      rankingList = (
        <ul className="topPlayersList">
          {this.state.summoners.map(summoner => {
            return <TopPlayer data={summoner} key={summoner._id}/>
          })}
        </ul>
      )
    } else {
      rankingList = <Loading/>
    }

    return (
      <section className="topPlayers">
        <div className="row">
          <h2 className="topPlayersTitle">Top players do Brazil</h2>

          {rankingList}

          <Link href="/rankings">
            <span className="btnLink">Veja o Ranking completo</span>
          </Link>
        </div>

        <style jsx>{`
          .row {
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
            position: relative;
          }

          .topPlayers {
            padding-top: 100px;
            padding-bottom: 100px;
          }

          .topPlayersTitle {
            color: #333;
            font-size: 3rem;
            margin-bottom: 50px;
          }

          .topPlayersList {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }

          .btnLink {
            color: #52bdab;
            background: transparent;
            text-align: center;
            padding: 14px 28px;
            height: 55px;
            font-size: 1.25rem;
            border: none;
            font-weight: 500;
            cursor: pointer;
            display: block;
            margin-left: auto;
            margin-right: auto;
            margin-top: 30px;
          }
        `}</style>
      </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(TopPlayers)
