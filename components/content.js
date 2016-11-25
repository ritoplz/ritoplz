'use strict'

/* @flow */

import React, { Component } from 'react'
import { style } from 'next/css'
import { connect } from 'react-redux'

import fetchUser from '../actions/fetch-user'
import EmptyState from './empty-state'
import Intro from './intro'

const styles = {
  base: {
    paddingTop: '50px',
    paddingBottom: '30px'
  },

  title: {
    fontSize: '70px',
    fontWeight: '400',
    lineHeight: '70px',
    marginBottom: '20px',
    marginTop: 0,
    color: '#333'
  },

  username: {
    fontWeight: 600
  },

  location: {
    color: '#ccc',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '30px',
    marginTop: 0,
    marginBottom: 0,
    cursor: 'pointer',
    transition: '.25s',

    ':hover': {
      color: '#999'
    }
  },

  divider: {
    width: '50px',
    border: '1px solid #F3F5FB',
    marginTop: '30px',
    marginLeft: 0
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
        summoners = <h2>My Summoners</h2>
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
