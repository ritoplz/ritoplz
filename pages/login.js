'use strict'

/* global localStorage: false */

import React from 'react'

const Login = () => {
  const handleLogin () {

  }

  return (
    <div className="row">
      <h2 className="title">Login</h2>
      <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lacus vel augue aliquet luctus. Ut urna libero.</p>

      <FormLogin />
    </div>
  )
}













export default class Login extends Component {
  constructor (props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin (e) {
    e.preventDefault()

    axios.post('http://localhost:3001/login', {
      email: this.email.value,
      password: this.password.value
    }).then(res => {
      const token = res.data.token
      localStorage.setItem('token', token)
      this.props.url.pushTo('/profile')
    }).catch(err => {
      console.log(err)
    })
  }

  render () {
    return (
      
    )
  }
}

Login.propTypes = {
  url: React.PropTypes.object
}
