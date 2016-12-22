'use strict'

import React from 'react'
import { style, insertRule } from 'next/css'
import getTier from 'ritoplz-tier'

import Header from './../components/header'
import Featured from './../components/featured'
import RankingUser from './../components/ranking-user'

const styles = {
  ranking: {
    display: 'flex'
  },

  rankingList: {
    flexBasis: '40%',
    maxHeight: 'calc(100vh - 70px)',
    overflow: 'auto'
  }
}

export default () => {
  const flag = getTier('bronze').flag.small

  return (
    <div>
      <Header />

      <section className={style(styles.ranking)}>
        <Featured />

        <ul className={style(styles.rankingList)}>
          <RankingUser avatar="https://s3.amazonaws.com/uifaces/faces/twitter/peterme/128.jpg" username="Sue Dixon" summoner="nicoleaniston" flag={flag} position={1}/>
        </ul>
      </section>
    </div>
  )
}

insertRule('* {padding: 0; margin: 0; box-sizing: border-box; font-family: Source Sans Pro, Helvetica Neue, Helvetica }')
