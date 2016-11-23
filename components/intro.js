'use strict'

/* @flow */

import React, {Component} from 'react'
import { style } from 'next/css'
import { connect } from 'react-redux'

import fetchUser from '../actions/fetch-user'

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

class Intro extends Component {
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
    if (this.state.profile.requested) {
      profile = (
        <header className={style(styles.base)}>
          <h1 className={style(styles.title)}>Hello, <span className={style(styles.username)}>{this.state.profile.data.user.name}</span>!</h1>
          <h3 className={style(styles.location)}>Add Location</h3>
          <hr className={style(styles.divider)}/>
        </header>
      )
    } else {
      profile = (<h1>Not Yet bro!</h1>)
    }

    return (
      profile
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: token => dispatch(fetchUser(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intro)
