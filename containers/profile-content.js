'use strict'

/* @flow */

import React, { Component } from 'react'
import { style } from 'next/css'
import { connect } from 'react-redux'
import cookie from 'react-cookie'

import fetchAccount from '../actions/fetch-account'
import EmptyState from './../components/empty-state'
import Intro from './../components/intro'
import MySummoners from './../components/my-summoners'
import Loading from './../components/loading'
import { getToken } from './../services/auth'

class ProfileContent extends Component {
  constructor () {
    super()

    this.state = {
      profile: {
        requested: false,
        requesting: false
      }
    }
  }

  componentDidMount () {
    const token = getToken()

    this.props.fetchAccount(token)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({profile: nextProps.user})
  }

  render() {
    let profile = null
    let summoners = null

    if (this.props.profile.requested) {
      const location = this.props.profile.data.user.country ? `${this.props.profile.data.user.city}, ${this.props.profile.data.user.state} ${this.props.profile.data.user.country}` : 'Add Location'
      profile = <Intro name={this.props.profile.data.user.name} location={location}/>

      if (this.props.profile.data.summoners.length > 0) {
        summoners = <MySummoners summoners={this.props.profile.data.summoners} />
      } else {
        summoners = <EmptyState />
      }
    } else {
      profile = <Loading />
    }

    return (
      <div>
        {profile}
        {summoners}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    profile: state.account
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAccount: token => dispatch(fetchAccount(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContent)
