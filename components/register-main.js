'use strict'

import PropTypes from 'prop-types'
import { colors, typography, phone } from './../components/ui/theme'

const RegisterMain = ({ children, title, subtitle, redirect, greeting }) => (
  <section className="register-main">
    <div className="register-main__redirect">
      {redirect}
    </div>

    <h3 className="register-main__title">
      <strong>Good {greeting}! </strong>
      {title}
    </h3>

    <p className="register-main__subtitle">
      {subtitle}
    </p>

    {children}

    <style>{`
      .register-main {
        flex-basis: calc(100% - 475px);
        padding-top: 125px;
        padding-bottom: 50px;
      }

      .register-main__redirect {
        position: absolute;
        right: 50px;
        top: 30px;
      }

      .register-main__title {
        text-align: center;
        color: ${colors.heading};
        margin-bottom: 18px;
        font-weight: 400;
        font-size: ${typography.f20};
      }

      .register-main__subtitle {
        text-align: center;
        color: ${colors.gray};
        font-size: ${typography.f16};
      }

      @media ${phone} {
        .register-main {
          flex-basis: 90%;
          margin-left: auto;
          margin-right: auto;
        }
      }
    `}</style>
  </section>
)

RegisterMain.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  redirect: PropTypes.element,
  greeting: PropTypes.string.isRequired
}

export default RegisterMain
