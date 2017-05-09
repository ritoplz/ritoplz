'use strict'

import { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import PropTypes from 'prop-types'

import fetchAccount from './../actions/fetch-account'
import Page from './../layouts/page'
import Header from './../components/header'
import { Row } from './../components/ui'
import store from './../store/configure-store'
import { isLogged } from './../services/auth'

class Profile extends Component {
  componentDidMount() {
    this.props.fetchAccount()
  }

  render() {
    return (
      <Page>
        <Header logged={isLogged()} user={this.props.user} />
        <Row>
          <h1>Profile</h1>
        </Row>
      </Page>
    )
  }
}

Profile.propTypes = {
  user: PropTypes.object,
  fetchAccount: PropTypes.func
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

export default withRedux(store, mapStateToProps, mapDispatchToProps)(Profile)
