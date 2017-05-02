'use strict'

import Page from './../layouts/page'
import { Row, Fieldset, TextInput, FormControl } from './../components/ui'

const Settings = () => {
  return (
    <Page>
      <Row>
        <form>
          <Fieldset
            title="Username"
            description="This is your name and where players access your profile"
          >
            <TextInput label="Username" placeholder="Your username" />
          </Fieldset>

          <Fieldset
            title="Email"
            description="This is your name and where players access your profile"
            badge="verified"
            type="success"
          >
            <TextInput
              type="email"
              label="Email"
              placeholder="email@ritoplz.com"
            />
          </Fieldset>

          <Fieldset
            title="Location"
            description="This will determ in which Ranking you will enter, we advise to put your current location so you can compete with players of your city"
          >
            <TextInput
              type="email"
              label="Country"
              placeholder="email@ritoplz.com"
            />
            <TextInput
              type="email"
              label="State"
              placeholder="email@ritoplz.com"
            />
            <TextInput
              type="email"
              label="City"
              placeholder="email@ritoplz.com"
            />
          </Fieldset>

          <Fieldset title="Password" description="You can change your password">
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

          <FormControl />
        </form>
      </Row>

      <style jsx>{`
        form {
          padding-top: 50px;
          padding-bottom: 50px;
        }
      `}</style>
    </Page>
  )
}

export default Settings
