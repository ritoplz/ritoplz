'use strict'

/* @flow */

import React, { Component } from 'react'
import { style } from 'next/css'
import { connect } from 'react-redux'

import fetchUser from '../actions/fetch-user'
import EmptyState from './empty-state'
import Intro from './intro'
import MySummoners from './my-summoners'

class Content extends Component {
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
    const localStorageRef = localStorage.getItem('token')
    this.props.fetchUser(localStorageRef)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({profile: nextProps.user})
  }

  render() {
    let profile = null
    let summoners = null

    if (this.props.profile.requested) {
      profile = <Intro name={this.props.profile.data.user.name} />

      if (this.props.profile.data.summoners.length > 0) {
        summoners = <MySummoners summoners={this.props.profile.data.summoners} />
      } else {
        summoners = <EmptyState />
      }
    } else {
      profile = (<h1>Not Yet bro!</h1>)
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
    profile: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: token => dispatch(fetchUser(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)
