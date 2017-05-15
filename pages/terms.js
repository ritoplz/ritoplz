'use strict'

import { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import PropTypes from 'prop-types'
import Link from 'next/link'

import Page from './../layouts/page'

import LegalTitle from './../components/legal-title'
import LegalHeading from './../components/legal-heading'
import LegalText from './../components/legal-text'
import Header from './../components/header'
import { Row } from './../components/ui'
import { colors, typography } from './../components/ui/theme'

import { isLogged } from './../services/auth'
import store from './../store/configure-store'
import { fetchAccount } from './../actions/fetch-account'

class Terms extends Component {
  componentDidMount() {
    const { fetchAccount } = this.props

    if (isLogged()) {
      fetchAccount()
    }
  }

  render() {
    return (
      <Page>
        <Header logged={isLogged()} user={this.props.user} />
        <Row>
          <LegalTitle title="Terms of Services" date="01/18/2017" />

          <LegalHeading>1. Acceptance of Terms.</LegalHeading>
          <LegalText>
            1.1. Ritoplz ("Company" or "we") provides its Service (as defined below) to you through its web site and platform located at
            {' '}
            <Link href="/"><a>https://ritoplz.com</a></Link>
            {' '}
            (the "Site"), subject to this Terms of Service agreement ("TOS"). By accepting this TOS or by accessing or using the Service or Site, you acknowledge that you have read, understood, and agree to be bound by this TOS. If you are entering into this TOS on behalf of a company, business or other legal entity, you represent that you have the authority to bind such entity and its affiliates to this TOS, in which case the terms "you" or "your" shall refer to such entity and its affiliates. If you do not have such authority, or if you do not agree with this TOS, you must not accept this TOS and may not use the Service.
          </LegalText>

          <LegalText>
            1.1. Ritoplz ("Company" or "we") provides its Service (as defined below) to you through its web site and platform located at
            {' '}
            <Link href="/"><a>https://ritoplz.com</a></Link>
            {' '}
            (the "Site"), subject to this Terms of Service agreement ("TOS"). By accepting this TOS or by accessing or using the Service or Site, you acknowledge that you have read, understood, and agree to be bound by this TOS. If you are entering into this TOS on behalf of a company, business or other legal entity, you represent that you have the authority to bind such entity and its affiliates to this TOS, in which case the terms "you" or "your" shall refer to such entity and its affiliates. If you do not have such authority, or if you do not agree with this TOS, you must not accept this TOS and may not use the Service.
          </LegalText>

          <LegalText>
            1.2. Company may change this TOS from time to time by providing thirty (30) days prior notice either by emailing the email address associated with your account or by posting a notice on the Site. You can review the most current version of this TOS at any time [at
            {' '}
            <Link href="/"><a>https://ritoplz.com</a></Link>
            /terms]. The revised terms and conditions will become effective thirty (30) days after we post or send you notice of such changes, and if you use the Service after that date, your use will constitute acceptance of the revised terms and conditions. If any change to this TOS is not acceptable to you, your only remedy is stop using the Services and send a cancellation email to
            {' '}
            <a href="mailto:ritoplzteam@gmail.com">ritoplzteam@gmail.com</a>
            .
          </LegalText>

          <LegalHeading>2. Description of Service.</LegalHeading>

          <LegalText>
            The "Service" includes (a) the Site, (b) all software (including the Software, as defined below), data, reports, text, images, sounds, video, and content made available through any of the foregoing (collectively referred to as the "Content"). Any new features added to or augmenting the Service are also subject to this TOS. For a more detailed description of our Service offerings, please see our product pages at
            {' '}
            <Link href="/"><a>https://ritoplz.com</a></Link>
            .
          </LegalText>

          <LegalHeading>
            3. General Conditions / Access and Use of the Service.
          </LegalHeading>

          <LegalText>
            3.1. Subject to the terms and conditions of this TOS, you may access and use the Service only for lawful purposes. All rights, title and interest in and to the Service and its components will remain with and belong exclusively to Company. You shall not (a) sublicense, resell, rent, lease, transfer, assign, time share or otherwise commercially exploit or make the Service available to any third party; (b) use the Service in any unlawful manner (including without limitation in violation of any data, privacy or export control laws) or in any manner that interferes with or disrupts the integrity or performance of the Service or its components, or (c) modify, adapt or hack the Service to, or otherwise attempt to gain unauthorized access to the Service or its related systems or networks. You shall comply with any codes of conduct, policies or other notices Company provides you or publishes in connection with the Service, and you shall promptly notify Company if you learn of a security breach related to the Service. Without limiting the foregoing, you acknowledge that Company may establish general practices and limits concerning use of the Service, including without limitation the maximum period of time that data, code or other content will be retained by the Service and the maximum storage space that will be allotted on Company's servers on your behalf. You agree that Company has no responsibility or liability for the deletion or failure to store any data or other content maintained or uploaded by the Service. You acknowledge that Company reserves the right to terminate accounts that are inactive for an extended period of time. You further acknowledge that Company reserves the right to change these general practices and limits at any time, in its sole discretion.
          </LegalText>

          <LegalText>
            3.2. Any software, APIs, tools or the like that may be made available by Company in connection with the Service ("Software") contains proprietary and confidential information that is protected by applicable intellectual property and other laws. Subject to the terms and conditions of this TOS, Company hereby grants you a non-transferable, non-sublicensable and non-exclusive right and license to use the object code of any Software on a single device solely in connection with the Service, provided that you shall not (and shall not allow any third party to) copy, modify, create a derivative work of, reverse engineer, reverse assemble or otherwise attempt to discover any source code or sell, assign, sublicense or otherwise transfer any right in any Software. You agree not to access the Service by any means other than through the interface that is provided by Company for use in accessing the Service. Any rights not expressly granted herein are reserved and no license or right to use any trademark of Company or any third party is granted to you in connection with the Service.
          </LegalText>

          <LegalText>
            3.3. You are solely responsible for all software, code, data, information, feedback, suggestions, text, content and other materials that you upload, post, deliver, provide or otherwise transmit or store (hereafter "post(ing)") in connection with or relating to the Service ("Your Content"). You are responsible for maintaining the confidentiality of your login, password and account and for all activities that occur under your login or account. Company reserves the right to access your account in order to respond to your requests for technical support. By posting Your Content on or through the Service, you hereby do and shall grant Company a worldwide, non-exclusive, royalty-free, fully paid, sublicensable and transferable license to use, modify, reproduce, distribute, display, publish and perform Your Content only in connection with its provision of the Service. Important Note: if you are a user of our OSS tier any software Content that you upload to the Service will be automatically publicly available in source code form to the general public. If you do not want to make such source code publicly available, you must subscribe to our premium tiers. Company has the right, but not the obligation, to monitor the Service, Content, or Your Content. You further agree that Company may remove or disable any Content at any time for any reason (including, but not limited to, upon receipt of claims or allegations from third parties or authorities relating to such Content), or for no reason at all.
          </LegalText>

          <LegalText>
            3.4. You understand that the operation of the Service, including Your Content, may be unencrypted and involve (a) transmissions over various networks; (b) changes to conform and adapt to technical requirements of connecting networks or devices and (c) transmission to Company's third party vendors and hosting partners to provide the necessary hardware, software, networking, storage, and related technology required to operate and maintain the Service. Accordingly, you acknowledge that you bear sole responsibility for adequate security, protection and backup of Your Content. Company will have no liability to you for any unauthorized access or use of any of Your Content, or any corruption, deletion, destruction or loss of any of Your Content.
          </LegalText>

          <LegalText>
            3.5. You shall be responsible for obtaining and maintaining any equipment and ancillary services needed to connect to, access or otherwise use the Services, including, without limitation, modems, hardware, server, software, operating system, networking, web servers, long distance and local telephone service (collectively, "Equipment"). You shall be responsible for ensuring that such Equipment is compatible with the Services (and, to the extent applicable, the Software) and complies with all configurations and specifications set forth in Company's published policies then in effect. You shall also be responsible for maintaining the security of the Equipment, your Account, passwords (including but not limited to administrative and user passwords) and files, and for all uses of your Account or the Equipment with or without your knowledge or consent.
          </LegalText>

          <LegalText>
            3.6. The failure of Company to exercise or enforce any right or provision of this TOS shall not be a waiver of that right. You acknowledge that this TOS is a contract between you and Company, even though it is electronic and is not physically signed by you and Company, and it governs your use of the Service.
          </LegalText>

          <LegalText>
            3.7. Company reserves the right to use your name and/or company name as a reference for marketing or promotional purposes on Company's website and in other communication with existing or potential Company customers. To decline Company this right you need to email
            {' '}
            <a href="mailto:ritoplzteam@gmail.com">ritoplzteam@gmail.com</a>
            {' '}
            stating that you do not wish to be used as a reference.
          </LegalText>
          <LegalText>
            3.8. Subject to the terms hereof, Company may (but has no obligation to) provide technical support services, through email in accordance with our standard practice.
          </LegalText>

          <LegalHeading>4. Termination.</LegalHeading>

          <LegalText>
            You have the right to terminate your account at any time by sending a cancellation request to
            {' '}
            <a href="mailto:ritoplzteam@gmail.com">ritoplzteam@gmail.com</a>
            . Subject to earlier termination as provided below, Company may terminate your Account and this TOS at any time by providing thirty (30) days prior notice to the administrative email address associated with your Account. All of Your Content on the Service (if any) may be permanently deleted by Company upon any termination of your account in its sole discretion.
          </LegalText>

          <p>
            Ritoplz isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.
          </p>
        </Row>

        <style jsx>{`
          p {
            text-align: center;
            color: ${colors.gray};
            font-size: ${typography.f12};
            line-height: 1.25rem;
            max-width: 70%;
            margin: 20px auto 50px;
            border-top: 1px solid ${colors.border};
            padding-top: 30px;
          }

          a {
            color: ${colors.primary};
          }
        `}</style>
      </Page>
    )
  }
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

Terms.propTypes = {
  fetchAccount: PropTypes.func.isRequired,
  user: PropTypes.object
}

export default withRedux(store, mapStateToProps, mapDispatchToProps)(Terms)
