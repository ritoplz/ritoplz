'use strict'

import React, {Component} from 'react'
import {Router, Route, browserHistory} from 'react-router'

import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'

export default class App extends Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Home} />
        <Route path='login' component={Login} />
        <Route path='signup' component={SignUp} />
        <Route path='profile' component={Profile} />
        <Route path='*' component={NotFound} />
      </Router>
    )
  }
}
