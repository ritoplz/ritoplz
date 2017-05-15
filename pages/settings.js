'use strict'

import { Component } from 'react'
import PropTypes from 'prop-types'
import withRedux from 'next-redux-wrapper'
import Router from 'next/router'
import Alert from 'react-s-alert'

import Page from './../layouts/page'

import {
  Row,
  Fieldset,
  TextInput,
  FormControl,
  SocialButton,
  UiButton,
  DividerOr,
  UiSelect,
  Notify
} from './../components/ui'
import Header from './../components/header'
import PageTitle from './../components/page-title'
import { colors, phone } from './../components/ui/theme'

import { locations, countries } from './../services/places'
import { isLogged } from './../services/auth'
import store from './../store/configure-store'
import { fetchAccount } from './../actions/fetch-account'
import { editUser } from './../actions/edit-user'

class Settings extends Component {
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleEditUser = this.handleEditUser.bind(this)
    this.state = {
      username: '',
      email: '',
      password: '',
      newPassword: '',
      emailConfirmed: false,
      country: 'BR',
      countrySelected: { label: 'Brazil', value: 'BR' },
      stateSelected: { label: 'São Paulo', value: 'SP' },
      state: 25,
      citySelected: { label: 'São Paulo', value: 'SP' }
    }
  }

  componentDidMount() {
    const { fetchAccount } = this.props

    if (isLogged()) {
      return fetchAccount().then(res => {
        if (res.error) {
          Router.push('/profile')
        }
      })
    }

    Router.push('/login')
  }

  componentWillReceiveProps(nextProps) {
    const { email, name, emailConfirmed } = nextProps.user

    if (nextProps.user.country && nextProps.user.state && nextProps.user.city) {
      countries.filter(country => {
        if (country.value === nextProps.user.country) {
          this.setState({
            countrySelected: country,
            country: country.value
          })

          locations[country.value].filter(state => {
            if (state.label === nextProps.user.state) {
              const stateIndex = locations[country.value].findIndex(
                ({ label }) => label === state.label
              )

              this.setState({
                stateSelected: state,
                state: stateIndex
              })

              locations[country.value][stateIndex].cities.filter(city => {
                if (city.label === nextProps.user.city) {
                  this.setState({ citySelected: city, city: city.label })
                }
              })
            }
          })
        }
      })
    }

    this.setState({
      username: name,
      email,
      emailConfirmed
    })
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleEditUser(e) {
    e.preventDefault()

    const { editUser, user } = this.props
    const {
      username,
      email,
      password,
      newPassword,
      country,
      stateSelected,
      city
    } = this.state
    const userData = {
      name: username,
      country,
      state: stateSelected.label,
      city
    }

    if (user.email === email) {
      if (password && newPassword) {
        userData.password = password
        userData.newPassword = newPassword
      }

      return editUser(userData)
        .then(({ data, error }) => {
          if (error) {
            return Alert.error(error)
          }

          Alert.success(data.message)
        })
        .catch(err => Alert.error(err))
    }

    Router.push({
      pathname: '/sudo-mode',
      query: {
        name: username,
        newEmail: email
      }
    })
  }

  onSelectState(stateSelected) {
    const state = locations[this.state.country].findIndex(
      ({ label }) => label === stateSelected.label
    )
    this.setState({ stateSelected, state })
  }

  onSelectCity(citySelected) {
    this.setState({ citySelected, city: citySelected.label })
  }

  render() {
    return (
      <Page>
        <Header logged={isLogged()} user={this.props.user} />
        <Row>
          <PageTitle title="Settings" />

          <form onSubmit={this.handleEditUser}>
            <Fieldset
              title="Username"
              description="This is your name and where players access your profile"
            >
              <TextInput
                label="Username"
                placeholder="Your username"
                name="username"
                handleInputChange={this.handleInputChange}
                inputValue={this.state.username}
              />
            </Fieldset>

            <Fieldset
              title="Email"
              description="This is your name and where players access your profile"
              badge={this.state.emailConfirmed ? 'verified' : 'not verified'}
              type={this.state.emailConfirmed ? 'success' : 'danger'}
            >
              <TextInput
                type="email"
                label="Email"
                placeholder="email@ritoplz.com"
                name="email"
                handleInputChange={this.handleInputChange}
                inputValue={this.state.email}
              />
            </Fieldset>

            <Fieldset
              title="Location"
              description="This will determ in which Ranking you will enter, we advise to put your current location so you can compete with players of your city"
            >
              <UiSelect
                label="Country"
                options={countries}
                placeholder="Select your country"
                inputSelected={this.state.countrySelected}
              />

              <UiSelect
                label="State"
                options={locations[this.state.country]}
                placeholder="Select your state"
                handleSelectChange={selected => this.onSelectState(selected)}
                inputSelected={this.state.stateSelected}
              />

              <UiSelect
                label="City"
                options={locations[this.state.country][this.state.state].cities}
                placeholder="Select your city"
                handleSelectChange={selected => this.onSelectCity(selected)}
                inputSelected={this.state.citySelected}
              />
            </Fieldset>

            <Fieldset
              title="Password"
              description="You can change your password"
            >
              <TextInput
                type="password"
                label="Current password"
                placeholder="Current password"
                name="password"
                handleInputChange={this.handleInputChange}
                inputValue={this.state.password}
              />
              <TextInput
                type="password"
                label="New password"
                placeholder="New password"
                name="newPassword"
                handleInputChange={this.handleInputChange}
                inputValue={this.state.newPassword}
              />
            </Fieldset>

            <Fieldset
              title="Invite Friends"
              description="Invite your friends and earn points to exchange for RP. For each friend that confirms its summoner, you will earn 150 points to exchange with RP."
              badge="Beta"
            >
              <div className="invite-friends">
                <h4 className="invite-friends__title">
                  Invite your friends to join Ritoplz! 🎉
                </h4>

                <SocialButton
                  customStyle={{ marginBottom: '15px' }}
                  href="https://facebook.com"
                  ui="facebook block"
                >
                  Invite on Facebook
                </SocialButton>

                <SocialButton
                  href="https://twitter.com"
                  ui="twitter block"
                  icon="twitter"
                >
                  Invite on Twitter
                </SocialButton>

                <DividerOr />

                <UiButton ui="primary block">
                  Add your friend's summoner name
                </UiButton>
              </div>
            </Fieldset>

            <FormControl />
          </form>

          <Notify />
        </Row>

        <style jsx>{`
          form {
            padding-bottom: 50px;
          }

          .invite-friends {
            background-color: #F7F8FC;
            border-radius: 6px;
            padding: 30px 40px;
            text-align: center;
          }

          .invite-friends__title {
            font-weight: 600;
            margin-bottom: 25px;
            color: ${colors.heading};
          }

          @media ${phone} {
            .invite-friends {
              padding: 20px;
            }
          }
        `}</style>
      </Page>
    )
  }
}

Settings.propTypes = {
  fetchAccount: PropTypes.func.isRequired,
  user: PropTypes.object,
  editUser: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    user: state.account.data.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAccount: () => dispatch(fetchAccount()),
    editUser: userData => dispatch(editUser(userData))
  }
}

export default withRedux(store, mapStateToProps, mapDispatchToProps)(Settings)
