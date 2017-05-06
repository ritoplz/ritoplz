'use strict'

import { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroller'

import store from './../store/configure-store'
import Page from './../layouts/page'
import { Row } from './../components/ui'
import RankingUser from './../components/ranking-user'
import Header from './../components/header'
import fetchRankings from './../actions/fetch-rankings'

class Rankings extends Component {
  constructor() {
    super()

    this.loadItems = this.loadItems.bind(this)

    this.state = {
      nextPage: false
    }
  }

  componentDidMount() {
    this.props.fetchRankings({ country: 'BR' }).then(({ data }) => {
      this.setState({
        nextPage: data.next_page,
        skip: 0,
        summoners: data.summoners
      })
    })
  }

  loadItems() {
    this.setState({ nextPage: false })

    this.props
      .fetchRankings({ skip: this.state.skip + 100, country: 'BR' })
      .then(({ data }) => {
        const summoners = this.state.summoners.concat(data.summoners)
        this.setState({
          nextPage: data.next_page,
          skip: this.state.skip + 100,
          summoners
        })
      })
  }

  render() {
    let rankings

    if (this.state.summoners) {
      rankings = this.state.summoners.map((user, index) => {
        return <RankingUser user={user} key={user._id} position={index + 1} />
      })
    } else {
      rankings = <div className="loader">Loading ...</div>
    }

    const loader = <div className="loader">Loading ...</div>

    return (
      <Page>
        <Header />

        <Row>
          <InfiniteScroll
            pageStart={0}
            loadMore={this.loadItems}
            hasMore={this.state.nextPage}
            loader={loader}
          >
            <div className="rankings">
              {rankings}
            </div>
          </InfiniteScroll>
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
    fetchRankings: params => dispatch(fetchRankings(params))
  }
}

export default withRedux(store, mapStateToProps, mapDispatchToProps)(Rankings)
