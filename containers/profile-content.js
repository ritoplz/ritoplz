'use strict'

/* @flow */

import React, { Component } from 'react'
import { style } from 'next/css'
import { connect } from 'react-redux'

import fetchAccount from '../actions/fetch-account'
import EmptyState from './../components/empty-state'
import Intro from './../components/intro'
import MySummoners from './../components/my-summoners'

const styles = {
  loading: {
    fontWeight: '100',
    textAlign: 'center',
    position: 'absolute',
    top: '40%',
    left: '0',
    right: '0',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#444'
  }
}

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
    this.props.fetchAccount(localStorageRef)
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
      profile = (<h1 className={style(styles.loading)}>Loading...</h1>)
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
    fetchAccount: token => dispatch(fetchAccount(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)
