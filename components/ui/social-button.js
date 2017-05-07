'use strict'

import PropTypes from 'prop-types'
import Link from 'next/link'
import { colors, typography } from './theme'
import { TwitterIcon, FacebookIcon } from './../icons'

const SocialButton = ({
  children,
  href,
  as,
  ui = 'facebook',
  icon = 'facebook',
  customStyle
}) => {
  let socialIcon

  switch (icon) {
    case 'facebook':
      socialIcon = <FacebookIcon />
      break

    case 'twitter':
      socialIcon = <TwitterIcon />
      break

    default:
      socialIcon = <FacebookIcon />
  }

  return (
    <Link href={href} as={as}>
      <a className={ui} style={customStyle}>
        <span className="social">
          {socialIcon}
        </span>

        {children}

        <style jsx>{`
          a {
            display: inline-block;
            font-weight: 600;
            line-height: 1.25;
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            user-select: none;
            border: 1px solid transparent;
            padding: 13px 30px;
            font-size: ${typography.f16};
            border-radius: 4px;
            transition: all .2s ease-in-out;
            cursor: pointer;
            position: relative;
          }

          .social {
            position: absolute;
            left: 15px;
          }

          .facebook {
            background-color: ${colors.facebook};
            color: ${colors.white};
          }

          .twitter {
            background-color: ${colors.twitter};
            color: ${colors.white};
          }

          .success:hover {
            background-color: ${colors.successHover};
          }

          .danger {
            background-color: ${colors.danger};
            color: ${colors.white};
          }

          .danger:hover {
            background-color: ${colors.dangerHover};
          }

          .default {
            background-color: ${colors.default};
          }

          .outline {
            background-color: transparent;
          }

          .outline.primary {
            border-color: ${colors.primary};
            color: ${colors.primary};
          }

          .outline.success {
            border-color: ${colors.success};
            color: ${colors.success};
          }

          .outline.danger {
            border-color: ${colors.danger};
            color: ${colors.danger};
          }

          .outline.default {
            border-color: #DADADA;
            color: #CCCCCC;
          }

          .link {
            background-color: transparent;
            color: ${colors.primary};
          }

          .link.default {
            color: ${colors.default};
          }

          .link.default:hover {
            color: ${colors.defaultHover};
          }

          .small {
            font-size: ${typography.f14};
            padding: 12px 15px;
            border-radius: 4px;
          }

          .large {
            font-size: 1.25rem;
            padding: 0.75rem 1.5rem;
            border-radius: 6px;
          }

          .block {
            display: block;
            width: 100%;
          }
        `}</style>
      </a>
    </Link>
  )
}

SocialButton.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
  ui: PropTypes.string,
  href: PropTypes.PropTypes.string.isRequired || PropTypes.object.isRequired,
  as: PropTypes.string || PropTypes.object,
  customStyle: PropTypes.object,
  icon: PropTypes.string
}

export default SocialButton
