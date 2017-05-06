'use strict'

import { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import PropTypes from 'prop-types'

import store from './../store/configure-store'
import Page from './../layouts/page'
import { Row } from './../components/ui'
import RankingUser from './../components/ranking-user'
import Header from './../components/header'
import fetchRankings from './../actions/fetch-rankings'

class Rankings extends Component {
  componentDidMount() {
    this.props.fetchRankings()
  }

  render() {
    let rankings

    if (this.props.summoners) {
      rankings = this.props.summoners.map((user, index) => (
        <RankingUser user={user} key={user._id} position={index + 1} />
      ))
    } else {
      rankings = <h1>Loading...</h1>
    }

    return (
      <Page>
        <Header />

        <Row>
          <div className="rankings">
            {rankings}
          </div>
        </Row>

        <style jsx>{`
          .rankings {
            padding-top: 50px;
            padding-bottom: 50px;
          }
        `}</style>
      </Page>
    )
  }
}

Rankings.propTypes = {
  fetchRankings: PropTypes.func.isRequired,
  summoners: PropTypes.array
}

const mapStateToProps = state => {
  return {
    summoners: state.rankings.data.summoners
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRankings: () => dispatch(fetchRankings())
  }
}

export default withRedux(store, mapStateToProps, mapDispatchToProps)(Rankings)
