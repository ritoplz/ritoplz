'use strict'

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

const Settings = () => {
  return (
    <Page>
      <Header />
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
            <UiSelect
              label="Country"
              options={countries}
              placeholder="Select your country"
            />

            <UiSelect
              label="State"
              options={locations.BR}
              placeholder="Select your state"
            />

            <UiSelect
              label="City"
              options={locations.BR[0].cities}
              placeholder="Select your city"
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

export default Settings
