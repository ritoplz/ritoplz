'use strict'

import Page from './../layouts/page'
import { Row } from './../components/ui'
import RankingUser from './../components/ranking-user'
import Header from './../components/header'

const rankingList = [
  {
    name: 'Pedro Álvares',
    summonerLevel: 30,
    profileIconId: 28,
    region: 'br',
    recentMatches: {
      lastPlayedSolo: {
        win: true,
        date: '16 hours ago'
      }
    },
    city: 'Goiânia',
    country: 'BR',
    state: 'Goiás',
    username: 'Matheus Nery',
    rankedSolo: {
      elo: 7943,
      isHotStreak: false,
      losses: 148,
      wins: 171,
      lp: 73,
      division: 'I',
      tier: 'CHALLENGER'
    }
  },
  {
    name: 'hídden',
    country: 'BR',
    state: 'São Paulo',
    city: 'São Paulo',
    username: 'Carlos Eduardo',
    summonerLevel: 30,
    profileIconId: 505,
    region: 'br',
    recentMatches: {
      lastPlayedSolo: {
        win: true,
        date: '3 days ago'
      }
    },
    rankedSolo: {
      elo: 6852,
      isHotStreak: false,
      losses: 216,
      wins: 246,
      lp: 302,
      division: 'I',
      tier: 'MASTER'
    }
  },
  {
    name: 'NL Marcelinho',
    country: 'BR',
    state: 'Pernambuco',
    city: 'Recife',
    username: 'Marcelo ',
    summonerLevel: 30,
    profileIconId: 1598,
    region: 'br',
    recentMatches: {
      lastPlayedFlex: {
        win: true,
        date: '2 days ago'
      },
      lastPlayedSolo: {
        win: false,
        date: '2 days ago'
      }
    },
    rankedSolo: {
      elo: 6674,
      isHotStreak: false,
      losses: 126,
      wins: 151,
      lp: 124,
      division: 'I',
      tier: 'MASTER'
    }
  }
]

const Rankings = () => {
  return (
    <Page>
      <Header />

      <Row>
        <div className="rankings">
          {rankingList.map(user => <RankingUser user={user} />)}
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
