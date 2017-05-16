'use strict'

import { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import PropTypes from 'prop-types'

import Page from './../layouts/page'

import { Row } from './../components/ui'
import Footer from './../components/footer'
import Header from './../components/header'

import { isLogged } from './../services/auth'
import store from './../store/configure-store'
import { fetchAccount } from './../actions/fetch-account'

class Player extends Component {
  static getInitialProps({ query: { name } }) {
    return { name }
  }

  componentDidMount() {
    const { fetchAccount } = this.props

    if (isLogged()) {
      fetchAccount()
    }
  }

  render() {
    const { name } = this.props

    return (
      <Page>
        <Row>
          <Header logged={isLogged()} user={this.props.user} />

          <h1>Player {name}</h1>
        </Row>

        <Footer />
      </Page>
    )
  }
}

Player.propTypes = {
  fetchAccount: PropTypes.func.isRequired,
  user: PropTypes.object,
  name: PropTypes.string.isRequired
}

const mapStateToProps = state => {
  return {
    user: state.account.data.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAccount: () => dispatch(fetchAccount())
  }
}

export default withRedux(store, mapStateToProps, mapDispatchToProps)(Player)
