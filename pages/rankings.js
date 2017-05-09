'use strict'

import { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroller'

import store from './../store/configure-store'
import Page from './../layouts/page'
import { Row } from './../components/ui'
import RankingUser from './../components/ranking-user'
import RankingHeading from './../components/ranking-heading'
import Header from './../components/header'
import { SpinnerIcon } from './../components/icons'
import fetchRankings from './../actions/fetch-rankings'
import fetchAccount from './../actions/fetch-account'
import { isLogged } from './../services/auth'

class Rankings extends Component {
  constructor() {
    super()

    this.loadItems = this.loadItems.bind(this)

    this.state = {
      nextPage: false
    }
  }

  componentDidMount() {
    const { fetchAccount, fetchRankings } = this.props

    fetchAccount().then(res => {
      let sQuery

      if (res.data) {
        const { country, state, city } = res.data.user
        this.setState({ user: res.data.user })
        sQuery = { country, state, city }
      } else {
        sQuery = { country: 'BR' }
      }

      fetchRankings(sQuery).then(({ data }) => {
        this.setState({
          nextPage: data.next_page,
          skip: 0,
          summoners: data.summoners
        })
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
      const currentUser = this.state.user || {}
      rankings = this.state.summoners.map((user, index) => {
        return (
          <RankingUser
            user={user}
            currentUser={currentUser}
            key={user._id}
            position={index + 1}
          />
        )
      })
    } else {
      rankings = <SpinnerIcon />
    }

    const loader = <SpinnerIcon />

    return (
      <Page>
        <Header logged={isLogged()} user={this.props.user} />

        <Row>
          <RankingHeading user={this.props.user} />

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
  fetchAccount: PropTypes.func.isRequired,
  summoners: PropTypes.array,
  user: PropTypes.object
}

const mapStateToProps = state => {
  return {
    summoners: state.rankings.data.summoners,
    user: state.account.data.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRankings: params => dispatch(fetchRankings(params)),
    fetchAccount: () => dispatch(fetchAccount())
  }
}

export default withRedux(store, mapStateToProps, mapDispatchToProps)(Rankings)
