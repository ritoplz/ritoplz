'use strict'

import { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import PropTypes from 'prop-types'
import { I18nextProvider } from 'react-i18next'

import Page from './../layouts/page'

import LegalTitle from './../components/legal-title'
import LegalHeading from './../components/legal-heading'
import LegalText from './../components/legal-text'
import Header from './../components/header'
import Footer from './../components/footer'
import { Row } from './../components/ui'
import { colors } from './../components/ui/theme'

import { isLogged } from './../services/auth'
import { startI18n, getTranslation } from './../services/i18n'
import store from './../store/configure-store'
import { fetchAccount } from './../actions/fetch-account'

class Privacy extends Component {
  static async getInitialProps() {
    const translations = await getTranslation(
      'pt',
      'common',
      'http://localhost:3000/static/locales/'
    )

    return { translations }
  }

  constructor(props) {
    super(props)

    this.i18n = startI18n(props.translations)
  }

  componentDidMount() {
    const { fetchAccount } = this.props

    if (isLogged()) {
      fetchAccount()
    }
  }

  render() {
    return (
      <I18nextProvider i18n={this.i18n}>
        <Page>
          <Header logged={isLogged()} user={this.props.user} />
          <Row>
            <LegalTitle title="Privacy Policy" date="01/18/2017" />

            <LegalHeading>Our Policy</LegalHeading>
            <LegalText>
              Welcome to the web site (the "Site") of Ritoplz. ("Ritoplz", "we", "us" and/or "our"). This Site is operated by Ritoplz and has been created to provide information about our company and services [Confirm description of your services] (together with the Site, the "Services") to our Service visitors ("you", "your"). This Privacy Policy sets forth Ritoplz's policy with respect to information including personally identifiable data ("Personal Data") and other information that is collected from visitors to the Site and Services.
            </LegalText>

            <LegalHeading>Information We Collect</LegalHeading>

            <LegalText>
              When you interact with us through the Services, we may collect Personal Data and other information from you, as further described below:
            </LegalText>

            <LegalHeading>
              Personal Data That You Provide Through the Services
            </LegalHeading>

            <LegalText>
              We collect Personal Data from you when you voluntarily provide such information, such as when you contact us with inquiries, respond to one of our surveys, register for access to the Services or use certain Services. Wherever Ritoplz collects Personal Data we make an effort to provide a link to this Privacy Policy.
            </LegalText>

            <LegalText>
              By voluntarily providing us with Personal Data, you are consenting to our use of it in accordance with this Privacy Policy. If you provide Personal Data to the Services, you acknowledge and agree that such Personal Data may be transferred from your current location to the offices and servers of Ritoplz and the authorized third parties referred to herein located in the United States.
            </LegalText>

            <LegalHeading>
              Our Use of Your Personal Data and Other Information
            </LegalHeading>

            <LegalText>
              Ritoplz uses the Personal Data you provide in a manner that is consistent with this Privacy Policy. If you provide Personal Data for a certain reason, we may use the Personal Data in connection with the reason for which it was provided. For instance, if you contact us by email, we will use the Personal Data you provide to answer your question or resolve your problem. Also, if you provide Personal Data in order to obtain access to the Services, we will use your Personal Data to provide you with access to such services and to monitor your use of such services. Ritoplz and its subsidiaries and affiliates (the "Related Companies") may also use your Personal Data and other personally non-identifiable information collected through the Services to help us improve the content and functionality of the Services, to better understand our users and to improve the Services. Ritoplz and its affiliates may use this information to contact you in the future to tell you about services we believe will be of interest to you. If we do so, each marketing communication we send you will contain instructions permitting you to "opt-out" of receiving future marketing communications. In addition, if at any time you wish not to receive any future marketing communications or you wish to have your name deleted from our mailing lists, please contact us as indicated below.
            </LegalText>

            <LegalText>
              If Ritoplz intends on using any Personal Data in any manner that is not consistent with this Privacy Policy, you will be informed of such anticipated use prior to or at the time at which the Personal Data is collected.
            </LegalText>

            <LegalHeading>
              Our Disclosure of Your Personal Data and Other Information
            </LegalHeading>

            <LegalText>
              Ritoplz is not in the business of selling your information. We consider this information to be a vital part of our relationship with you. There are, however, certain circumstances in which we may share your Personal Data with certain third parties without further notice to you, as set forth below:
            </LegalText>

            <LegalHeading>Business Transfers:</LegalHeading>

            <LegalText>
              As we develop our business, we might sell or buy businesses or assets. In the event of a corporate sale, merger, reorganization, dissolution or similar event, Personal Data may be part of the transferred assets.
            </LegalText>

            <LegalHeading>Related Companies:</LegalHeading>

            <LegalText>
              We may also share your Personal Data with our Related Companies for purposes consistent with this Privacy Policy.
            </LegalText>

            <LegalHeading>
              Agents, Consultants and Related Third Parties:
            </LegalHeading>

            <LegalText>
              Ritoplz, like many businesses, sometimes hires other companies to perform certain business-related functions. Examples of such functions include mailing information, maintaining databases and processing payments. When we employ another entity to perform a function of this nature, we only provide them with the information that they need to perform their specific function.
            </LegalText>

            <LegalHeading>Your Choices</LegalHeading>

            <LegalText>
              You can visit the Site without providing any Personal Data. If you choose not to provide any Personal Data, you may not be able to use certain Services.
            </LegalText>

            <LegalHeading>Exclusions</LegalHeading>

            <LegalText>
              This Privacy Policy does not apply to any Personal Data collected by Ritoplz other than Personal Data collected through the Services. This Privacy Policy shall not apply to any unsolicited information you provide to Ritoplz through the Services or through any other means. This includes, but is not limited to, information posted to any public areas of the Services, such as forums, any ideas for new products or modifications to existing products, and other unsolicited submissions (collectively, "Unsolicited Information"). All Unsolicited Information shall be deemed to be non-confidential and Ritoplz shall be free to reproduce, use, disclose, and distribute such Unsolicited Information to others without limitation or attribution.
            </LegalText>

            <LegalHeading>Children</LegalHeading>

            <LegalText>
              Ritoplz does not knowingly collect Personal Data from children under the age of 13. If you are under the age of 13, please do not submit any Personal Data through the Services. We encourage parents and legal guardians to monitor their children's Internet usage and to help enforce our Privacy Policy by instructing their children never to provide Personal Data on the Services without their permission. If you have reason to believe that a child under the age of 13 has provided Personal Data to Ritoplz through the Services, please contact us, and we will endeavor to delete that information from our databases.
            </LegalText>

            <LegalHeading>Links to Other Web Sites</LegalHeading>

            <LegalText>
              This Privacy Policy applies only to the Services. The Services may contain links to other web sites not operated or controlled by Ritoplz (the "Third Party Sites"). The policies and procedures we described here do not apply to the Third Party Sites. The links from the Services do not imply that Ritoplz endorses or has reviewed the Third Party Sites. We suggest contacting those sites directly for information on their privacy policies.
            </LegalText>

            <LegalHeading>Security</LegalHeading>

            <LegalText>
              Ritoplz takes reasonable steps to protect the Personal Data provided via the Services from loss, misuse, and unauthorized access, disclosure, alteration, or destruction. However, no Internet or email transmission is ever fully secure or error free. In particular, email sent to or from the Services may not be secure. Therefore, you should take special care in deciding what information you send to us via email. Please keep this in mind when disclosing any Personal Data to Ritoplz via the Internet.
            </LegalText>

            <LegalHeading>Other Terms and Conditions</LegalHeading>

            <LegalText>
              Your access to and use of the Services is subject to the Terms of Service.
            </LegalText>

            <LegalHeading>Changes to Ritoplz's Privacy Policy</LegalHeading>

            <LegalText>
              The Services and our business may change from time to time. As a result, at times it may be necessary for Ritoplz to make changes to this Privacy Policy. Ritoplz reserves the right to update or modify this Privacy Policy at any time and from time to time without prior notice. Please review this policy periodically, and especially before you provide any Personal Data. This Privacy Policy was last updated on the date indicated above. Your continued use of the Services after any changes or revisions to this Privacy Policy shall indicate your agreement with the terms of such revised Privacy Policy.
            </LegalText>

            <LegalHeading>Contacting Us</LegalHeading>

            <LegalText>
              To keep your Personal Data accurate, current, and complete, please contact us as specified below. We will take reasonable steps to update or correct Personal Data in our possession that you have previously submitted via the Services.
            </LegalText>

            <LegalText>
              Please also feel free to contact us if you have any questions about Ritoplz's Privacy Policy or the information practices of the Services You may contact us as follows
              {' '}
              <a href="mailto:ritoplzteam@gmail.com">ritoplzteam@gmail.com</a>
            </LegalText>
          </Row>

          <Footer />

          <style jsx>{`
            a {
              color: ${colors.primary};
            }
          `}</style>
        </Page>
      </I18nextProvider>
    )
  }
}

Privacy.propTypes = {
  fetchAccount: PropTypes.func.isRequired,
  user: PropTypes.object,
  translations: PropTypes.object
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

export default withRedux(store, mapStateToProps, mapDispatchToProps)(Privacy)
