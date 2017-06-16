'use strict'

import { translate } from 'react-i18next'
import PropTypes from 'prop-types'
import Link from 'next/link'

import LegalTitle from './legal-title'
import LegalHeading from './legal-heading'
import LegalText from './legal-text'
import { Row } from './ui'
import { colors } from './ui/theme'

const FaqContext = ({ t }) => (
  <Row>
    <LegalTitle title="FAQ" date="01/18/2017" />

    <LegalHeading>
      1. {t('Will Ritoplz support other regions such as NA')}?
    </LegalHeading>
    <LegalText>
      {t(
        'Surely, we are in the process of adding support for more regions, you can expect to have them to come soon'
      )}
      .
    </LegalText>

    <LegalHeading>
      2. {t('Will Ritoplz support another type of queues and rankings')}?
    </LegalHeading>

    <LegalText>
      {t(
        'Yes, we are also in the process of adding more types of rankings such as Champion Mastery per region, Best Duo players per region, Victory streak and more, you can expect to have these functionalities in the coming months'
      )}
      .
    </LegalText>

    <LegalHeading>
      3. {t(`I couldn't find my city or state, what should I do`)}?
    </LegalHeading>

    <LegalText>
      {t(
        'We are trying to keep the cities between 1 ~ 7 per state, if we receive too many requests for a city we will be inclined to add it if you want a city just send us an email to'
      )}
      {' '}
      <a href="mailto:ritoplzteam@gmail.com">ritoplzteam@gmail.com</a>
      .
      {' '}
      {t('If you think a state is missing for you region sent us an email too')}
      .
    </LegalText>

    <LegalHeading>
      4. {t('Can I change my location')}?
    </LegalHeading>

    <LegalText>
      {t(
        'You are able to change you location anytime you want, just note that you will be part of the rankings of the newest selected region'
      )}
      .
      {' '}
      {t(
        'At the moment we allow users to change their location only three times'
      )}
      .
      {' '}
      {t('Please, contact us if you selected the wrong location')}
      .
    </LegalText>

    <LegalHeading>
      5. {t('How can I confirm my summoner')}?
    </LegalHeading>

    <LegalText>
      {t(
        'We created a dedicated page to help you confirm your summoner, you can find it'
      )}
      {' '}
      <Link href="/how-to"><a>{t('here')}</a></Link>.
    </LegalText>

    <LegalHeading>
      6. {t('Why do I need to confirm my summoner')}?
    </LegalHeading>

    <LegalText>
      {t(
        'You need to confirm your summoner so we can make sure that the summoner belongs to you'
      )}
      .
      {' '}
      {t(
        'And the easiest way we found was by creating a Mastery or Runes page on your account with the unique code we provide to each summoner that you add'
      )}
      .
    </LegalText>

    <style jsx>{`
      a {
        color: ${colors.primary};
      }
    `}</style>
  </Row>
)

FaqContext.propTypes = {
  t: PropTypes.func
}

export default translate(['common'])(FaqContext)
