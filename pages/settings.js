'use strict'

import { Component } from 'react'
import PropTypes from 'prop-types'
import withRedux from 'next-redux-wrapper'

import store from './../store/configure-store'
import Page from './../layouts/page'
import {
  Row,
  Fieldset,
  TextInput,
  FormControl,
  SocialButton,
  UiButton,
  DividerOr,
  UiSelect
} from './../components/ui'
import Header from './../components/header'
import { colors } from './../components/ui/theme'
import { locations, countries } from './../services/places'
import fetchAccount from './../actions/fetch-account'

class Settings extends Component {
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.state = { username: '' }
  }

  componentDidMount() {
    this.props.fetchAccount()
  }

  componentWillReceiveProps(nextProps) {
    const { email, name, emailConfirmed } = nextProps.user
    this.setState({
      email,
      username: name,
      emailConfirmed
    })
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <Page>
        <Header />
        <Row>
          <h2 className="page-title">Settings</h2>

          <form>
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
                inputRef={ref => {
                  this.username = ref
                }}
              />
            </Fieldset>

            <Fieldset
              title="Email"
              description="This is your name and where players access your profile"
              badge={this.state.emailverified ? 'verified' : 'not verified'}
              type={this.state.emailverified ? 'success' : 'danger'}
            >
              <TextInput
                type="email"
                label="Email"
                placeholder="email@ritoplz.com"
                name="email"
                handleInputChange={this.handleInputChange}
                inputValue={this.state.email}
                inputRef={ref => {
                  this.email = ref
                }}
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
                handleSelectChange={value => console.log(value)}
              />

              <UiSelect
                label="State"
                options={locations.BR}
                placeholder="Select your state"
                handleSelectChange={value => console.log(value)}
              />

              <UiSelect
                label="City"
                options={locations.BR[0].cities}
                placeholder="Select your city"
                handleSelectChange={value => console.log(value)}
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
              />
              <TextInput
                type="password"
                label="New password"
                placeholder="New password"
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

                <SocialButton href="https://twitter.com" ui="twitter block">
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
        </Row>

        <style jsx>{`
          .page-title {
            margin-top: 50px;
            color: ${colors.heading};
            font-weight: 600;
          }

          form {
            padding-top: 50px;
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
        `}</style>
      </Page>
    )
  }
}

Settings.propTypes = {
  fetchAccount: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
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

export default withRedux(store, mapStateToProps, mapDispatchToProps)(Settings)
