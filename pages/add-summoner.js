'use strict'

import { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import PropTypes from 'prop-types'
import Router from 'next/router'

import { isLogged } from './../services/auth'
import Page from './../layouts/page'
import { UiButton, UiLink, TextInput, Row } from './../components/ui'
import { colors, typography } from './../components/ui/theme'
import store from './../store/configure-store'
import Header from './../components/header'
import fetchAccount from './../actions/fetch-account'
import addSummoner from './../actions/add-summoner'

class AddSummoner extends Component {
  constructor() {
    super()
    this.addSummoner = this.addSummoner.bind(this)
  }

  componentDidMount() {
    const { fetchAccount } = this.props

    if (isLogged()) {
      fetchAccount()
    }
  }

  addSummoner(e) {
    e.preventDefault()
    const { addSummoner } = this.props
    const summoner = { name: this.summoner.value }
    addSummoner(summoner).then(({ data, error }) => {
      if (error) {
        return console.log('Error', error)
      }

      Router.push({
        pathname: '/how-to',
        query: { code: data.code }
      })
    })
  }

  render() {
    return (
      <Page>
        <Header logged={isLogged()} user={this.props.user} />
        <Row>
          <h2>Add summoner</h2>
          <p>
            Add and confirm your summoner to enter our Ranking.
          </p>

          <form onSubmit={this.addSummoner}>
            <TextInput
              label="Summoner name"
              placeholder="Summoner name"
              inputRef={ref => {
                this.summoner = ref
              }}
            />

            <UiButton ui="primary block" type="submit">Add summoner</UiButton>
            <UiLink
              href="/profile"
              ui="link block small"
              customStyle={{ marginTop: '10px' }}
            >
              Back to profile
            </UiLink>
          </form>
        </Row>

        <style jsx>{`
          h2 {
            text-align: center;
            padding-top: 120px;
            font-size: ${typography.f30};
            color: ${colors.grayDark};
            margin-bottom: 8px;
            font-weight: 600;
          }

          p {
            text-align: center;
            margin-bottom: 50px;
            font-size: ${typography.f16};
            color: ${colors.gray};
          }

          form {
            max-width: 60%;
            margin-left: auto;
            margin-right: auto;
          }
        `}</style>
      </Page>
    )
  }
}

AddSummoner.propTypes = {
  fetchAccount: PropTypes.func.isRequired,
  addSummoner: PropTypes.func.isRequired,
  user: PropTypes.object
}

const mapStateToProps = state => {
  return {
    user: state.account.data.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAccount: () => dispatch(fetchAccount()),
    addSummoner: summoner => dispatch(addSummoner(summoner))
  }
}

export default withRedux(store, mapStateToProps, mapDispatchToProps)(
  AddSummoner
)
