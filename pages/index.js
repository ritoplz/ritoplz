'use strict'

import React from 'react'
import Link from 'next/link'
import { Provider } from 'react-redux'

import Meta from '../components/meta'
import Footer from '../components/footer'
import TopPlayers from '../containers/top-players'
import Header from '../components/header'
import configureStore from '../store/configureStore'
import { isLogged } from './../services/auth'

export default () => {
  const store = configureStore()
  let items

  if (isLogged()) {
    items = [
      {name: 'Rankings', link: 'rankings', type: 'item'},
      {name: 'Profile', link: 'profile', type: 'button'}
    ]
  } else {
    items = [
      {name: 'Rankings', link: 'rankings', type: 'item'},
      {name: 'Cadastrar', link: 'signup', type: 'button'}
    ]
  }

  store.subscribe(() => store.getState())

  return (
    <Provider store={store}>
      <div>
        <Meta/>

        <Header items={items}/>

        <main className="cover">
          <div className="row">
            <h1 className="title">Esteja sempre no topo</h1>
            <h2 className="subtitle">O primeiro Ranking mundial de League of Legends. <br/>Veja quem é o melhor jogador da sua região.</h2>

            <Link href="/signup">
              <span className="btn">Entrar no Ritoplz</span>
            </Link>

            <Link href="/rankings">
              <span className="btnLink">Veja o Rankings</span>
            </Link>

            <img className="card" src="static/card.png" alt=""/>
          </div>
        </main>

        <TopPlayers/>

        <section className="tier">
          <h2 className="tierTitle">Compita com jogadores da sua região</h2>
          <h3 className="tierSubtitle">Rankings por região, campeão, elo e vitórias.</h3>

          <div className="tierDrop"></div>

          <div className="row">
            <Link href="/signup">
              <span className="joinBtn">Entre no Ritoplz</span>
            </Link>

            <ul className="tierList">
              <li className="tierItem">
                <img src="https://ritoplz-tier.now.sh/bronze_small.png" alt=""/>
                <h3 className="tierItemTitle">Bronze</h3>
              </li>

              <li className="tierItem">
                <img src="https://ritoplz-tier.now.sh/silver_small.png" alt=""/>
                <h3 className="tierItemTitle">Silver</h3>
              </li>

              <li className="tierItem">
                <img src="https://ritoplz-tier.now.sh/gold_small.png" alt=""/>
                <h3 className="tierItemTitle">Gold</h3>
              </li>

              <li className="tierItem">
                <img src="https://ritoplz-tier.now.sh/platinum_small.png" alt=""/>
                <h3 className="tierItemTitle">Platinum</h3>
              </li>

              <li className="tierItem">
                <img src="https://ritoplz-tier.now.sh/diamond_small.png" alt=""/>
                <h3 className="tierItemTitle">Diamond</h3>
              </li>

              <li className="tierItem">
                <img src="https://ritoplz-tier.now.sh/master_small.png" alt=""/>
                <h3 className="tierItemTitle">Master</h3>
              </li>

              <li className="tierItem">
                <img src="https://ritoplz-tier.now.sh/challenger_small.png" alt=""/>
                <h3 className="tierItemTitle">Challenger</h3>
              </li>
            </ul>
          </div>
        </section>

        <Footer/>

        <style jsx>{`
          .row {
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
            position: relative;
          }

          .header {
            height: 70px;
          }

          .cover {
            background: url("static/bg.png") center center;
            background-size: cover;
            height: 100vh;
            padding-top: 110px;
            padding-bottom: 75px;
          }

          .title {
            color: #333;
            font-size: 4rem;
            text-transform: uppercase;
            max-width: 500px;
          }

          .subtitle {
            color: #999;
            font-size: 1.5rem;
            line-height: 2.5rem;
            margin-top: 10px;
            font-weight: 400;
            margin-bottom: 70px;
          }

          .btn {
            color: #fff;
            border: none;
            border-radius: 5px;
            padding: 14px 28px;
            font-size: 1rem;
            height: 55px;
            font-weight: 500;
            cursor: pointer;
            background: linear-gradient(to right, #52bdab 0%,#6BB6D6 100%);
            margin-right: 15px;
          }

          .btnLink {
            color: #52bdab;
            background: transparent;
            text-align: center;
            padding: 14px 28px;
            height: 55px;
            font-size: 1rem;
            border: none;
            font-weight: 500;
            cursor: pointer;
          }

          .card {
            position: absolute;
            top: 30px;
            right: -135px;
          }

          .tier {
            padding-bottom: 100px;
          }

          .tierTitle {
            text-align: center;
            font-size: 3rem;
            color: #333;
          }

          .tierSubtitle {
            text-align: center;
            font-size: 1.5rem;
            color: #999;
            font-weight: 300;
            margin-top: 20px;
            margin-bottom: 75px;
          }

          .tierDrop {
            background: url(static/tierdrop.png) center center;
            background-size: cover;
            minHeight: 700px;
          }

          .tierList {
            display: flex;
            justify-content: space-between;
            max-width: 100%;
            overflow-x: auto;
            margin-top: 100px;
          }

          .tierItem {
            text-align: center;
          }

          .tierItemTitle {
            font-weight: 400;
            color: #ccc;
            font-size: 1rem;
          }

          .joinBtn {
            text-align: center;
            margin-top: 150px;
            display: block;
            background-color: red;
            padding: 18px 20px;
            font-size: 1.25rem;
            border-radius: 4px;
            margin-left: auto;
            margin-right: auto;
            width: 100%;
            max-width: 400px;
            background: linear-gradient(to right, #52bdab 0%,#6BB6D6 100%);
            margin-top: 100px;
            color: #fff;
          }
        }
        `}</style>
      </div>
    </Provider>
  )
}
