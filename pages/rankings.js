'use strict'

import { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroller'
import Alert from 'react-s-alert'

import store from './../store/configure-store'
import Page from './../layouts/page'
import { Row, UiSelect, Notify } from './../components/ui'
import RankingUser from './../components/ranking-user'
import RankingHeading from './../components/ranking-heading'
import Header from './../components/header'
import { SpinnerIcon } from './../components/icons'
import fetchRankings from './../actions/fetch-rankings'
import { fetchAccount } from './../actions/fetch-account'
import { isLogged } from './../services/auth'
import { locations, countries } from './../services/places'

import { colors, typography } from './../components/ui/theme'

class Rankings extends Component {
  constructor() {
    super()

    this.loadItems = this.loadItems.bind(this)
    this.onFetchRankings = this.onFetchRankings.bind(this)
    this.onSelectState = this.onSelectState.bind(this)
    this.onSelectCity = this.onSelectCity.bind(this)

    this.state = {
      nextPage: false,
      country: 'BR',
      countrySelected: { label: 'Brazil', value: 'BR' },
      stateSelected: { label: 'São Paulo', value: 'SP' },
      state: 25,
      citySelected: { label: 'São Paulo', value: 'SP' }
    }
  }

  componentDidMount() {
    const { fetchAccount } = this.props

    fetchAccount().then(({ data, error }) => {
      let sQuery

      if (data) {
        const { country, state, city } = data.user
        this.setState({ user: data.user })
        sQuery = { country, state, city }
      } else {
        sQuery = { country: this.state.country }
      }

      if (error) {
        Alert.error(error)
      }

      this.onFetchRankings(sQuery)
    })
  }

  onFetchRankings(sQuery) {
    const { fetchRankings } = this.props

    fetchRankings(sQuery)
      .then(({ data, error }) => {
        if (data) {
          const { summoners, skip, limit, count, total } = data
          this.setState({
            nextPage: data.next_page,
            summoners,
            skip,
            limit,
            count,
            total
          })

          return
        }

        Alert.error(error)
      })
      .catch(err => Alert.error(err))
  }

  loadItems() {
    this.setState({ nextPage: false })
    const { skip, summoners, country, state, city } = this.state
    const { fetchRankings } = this.props
    const sQuery = { skip: skip + 100, country, state, city }

    fetchRankings(sQuery).then(({ data }) => {
      const newSummoners = summoners.concat(data.summoners)
      this.setState({
        nextPage: data.next_page,
        skip: skip + 100,
        summoners: newSummoners
      })
    })
  }

  onSelectState(stateSelected) {
    const state = locations[this.state.country].findIndex(
      ({ label }) => label === stateSelected.label
    )
    this.setState({ stateSelected, state })

    const sQuery = {
      country: this.state.country,
      state: this.state.stateSelected.label
    }

    this.onFetchRankings(sQuery)
  }

  onSelectCity(citySelected) {
    this.setState({ citySelected, city: citySelected.label })

    const sQuery = {
      country: this.state.country,
      state: this.state.stateSelected.label,
      city: this.state.city
    }

    this.onFetchRankings(sQuery)
  }

  render() {
    let rankings
    const { summoners, user = {} } = this.state

    if (summoners) {
      const currentUser = user

      rankings = summoners.map((user, index) => {
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

          <div className="filter">
            <div className="filter-select">
              <UiSelect
                label="Country"
                options={countries}
                placeholder="Select your country"
                inputSelected={this.state.countrySelected}
              />
            </div>

            <div className="filter-select">
              <UiSelect
                label="State"
                options={locations[this.state.country]}
                placeholder="Select your state"
                handleSelectChange={selected => this.onSelectState(selected)}
                inputSelected={this.state.stateSelected}
              />
            </div>

            <div className="filter-select">
              <UiSelect
                label="City"
                options={locations[this.state.country][this.state.state].cities}
                placeholder="Select your city"
                handleSelectChange={selected => this.onSelectCity(selected)}
                inputSelected={this.state.citySelected}
              />
            </div>
          </div>

          <ul>
            <li className="active">Ranked</li>
          </ul>

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

          <Notify />
        </Row>

        <style jsx>{`
          .filter {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
            margin-bottom: 50px;
          }

          .filter-select {
            flex-basis: calc(33.33% - 15px);
          }

          ul {
            display: flex;
            border-bottom: 1px solid ${colors.border};
          }

          li {
            padding: 12px;
            font-size: ${typography.f14};
            margin-right: 35px;
            text-transform: uppercase;
            font-weight: 600;
            color: ${colors.gray};
            transition: .15s ease-in-out;
            cursor: pointer;
          }

          li:hover {
            color: ${colors.grayDark};
          }

          .active {
            color: ${colors.primary};
            border-bottom: 2px solid ${colors.primary};
          }

          .active:hover {
            color: ${colors.primary};
          }

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
