'use strict'

import React, { Component } from 'react'
import { style } from 'next/css'
import { connect } from 'react-redux'
import Link from 'next/link'

import fetchRankings from '../actions/fetch-rankings'
import TopPlayer from './../components/top-player'
import Loading from './../components/loading'

const styles = {
  row: {
    maxWidth: '1000px',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',

    '@media (max-width: 750px)': {
      paddingLeft: '20px',
      paddingRight: '20px'
    }
  },

  topPlayers: {
    paddingTop: '100px',
    paddingBottom: '100px'
  },

  topPlayersTitle: {
    color: '#333',
    fontSize: '3rem',
    marginBottom: '50px'
  },

  topPlayersList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },

  btnLink: {
    color: '#52bdab',
    background: 'transparent',
    textAlign: 'center',
    padding: '14px 28px',
    height: '55px',
    fontSize: '1.25rem',
    border: 'none',
    fontWeight: '500',
    cursor: 'pointer',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '30px'
  }
}

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
        <ul className={style(styles.topPlayersList)}>
          {this.state.summoners.map(summoner => {
            return <TopPlayer data={summoner} key={summoner._id}/>
          })}
        </ul>
      )
    } else {
      rankingList = <Loading/>
    }

    return (
      <section className={style(styles.topPlayers)}>
        <div className={style(styles.row)}>
          <h2 className={style(styles.topPlayersTitle)}>Top players in Brazil</h2>

          {rankingList}

          <Link href="/rankings">
            <span className={style(styles.btnLink)}>See full rankings</span>
          </Link>
        </div>
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
