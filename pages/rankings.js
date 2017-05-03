'use strict'

import Page from './../layouts/page'
import { Row } from './../components/ui'
import RankingUser from './../components/ranking-user'

const Rankings = () => {
  return (
    <Page>
      <Row>
        <div className="rankings">
          <RankingUser />
          <RankingUser />
          <RankingUser />
          <RankingUser />
          <RankingUser />
          <RankingUser />
          <RankingUser />
          <RankingUser />
          <RankingUser />
          <RankingUser />
          <RankingUser />
          <RankingUser />
          <RankingUser />
          <RankingUser />
          <RankingUser />
          <RankingUser />
        </div>
      </Row>

      <style jsx>{`
        .rankings {
          padding-top: 50px;
          padding-bottom: 50px;
        }
      `}</style>
    </Page>
  )
}

export default Rankings
