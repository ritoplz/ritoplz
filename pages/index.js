'use strict'

import React from 'react'
import Link from 'next/link'
import { style } from 'next/css'
import { Provider } from 'react-redux'

import Meta from '../components/meta'
import Footer from '../components/footer'
import TopPlayers from '../containers/top-players'
import Header from '../components/header'
import configureStore from '../store/configureStore'
import { isLogged } from './../services/auth'

const styles = {
  row: {
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',

    '@media (max-width: 750px)': {
      paddingLeft: '20px',
      paddingRight: '20px'
    }
  },

  header: {
    height: '70px'
  },

  cover: {
    background: 'url("static/bg.png") center center',
    backgroundSize: 'cover',
    height: '100vh',
    paddingTop: '110px',
    paddingBottom: '75px'
  },

  title: {
    color: '#333',
    fontSize: '4rem',
    textTransform: 'uppercase',
    maxWidth: '500px'
  },

  subtitle: {
    color: '#999',
    fontSize: '1.5rem',
    lineHeight: '2.5rem',
    marginTop: '10px',
    fontWeight: '400',
    marginBottom: '70px'
  },

  btn: {
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '14px 28px',
    fontSize: '1rem',
    height: '55px',
    fontWeight: '500',
    cursor: 'pointer',
    background: 'linear-gradient(to right, #52bdab 0%,#6BB6D6 100%)',
    marginRight: '15px'
  },

  btnLink: {
    color: '#52bdab',
    background: 'transparent',
    textAlign: 'center',
    padding: '14px 28px',
    height: '55px',
    fontSize: '1rem',
    border: 'none',
    fontWeight: '500',
    cursor: 'pointer'
  },

  card: {
    position: 'absolute',
    top: '30px',
    right: '-135px',

    '@media (max-width: 750px)': {
      display: 'none'
    }
  },

  tier: {
    paddingBottom: '100px',
  },

  tierTitle: {
    textAlign: 'center',
    fontSize: '3rem',
    color: '#333'
  },

  tierSubtitle: {
    textAlign: 'center',
    fontSize: '1.5rem',
    color: '#999',
    fontWeight: '300',
    marginTop: '20px',
    marginBottom: '75px'
  },

  tierDrop: {
    background: 'url(static/tierdrop.png) center center',
    backgroundSize: 'cover',
    minHeight: '700px'
  },

  tierList: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '100%',
    overflowX: 'auto',
    marginTop: '100px'
  },

  tierItem: {
    textAlign: 'center'
  },

  tierItemTitle: {
    fontWeight: '400',
    color: '#ccc',
    fontSize: '1rem'
  },

  joinBtn: {
    textAlign: 'center',
    marginRop: '150px',
    display: 'block',
    backgroundColor: 'red',
    padding: '18px 20px',
    fontSize: '1.25rem',
    borderRadius: '4px',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    maxWidth: '400px',
    background: 'linear-gradient(to right, #52bdab 0%,#6BB6D6 100%)',
    marginTop: '100px',
    color: '#fff'
  }
}

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
      {name: 'Login', link: 'login', type: 'button'}
    ]
  }

  store.subscribe(() => store.getState())

  return (
    <Provider store={store}>
      <div>
        <Meta/>

        <Header items={items}/>

        <main className={style(styles.cover)}>
          <div className={style(styles.row)}>
            <h1 className={style(styles.title)}>Sempre esteja no topo</h1>
            <h2 className={style(styles.subtitle)}>O primeiro Ranking mundial de League of Legends. <br/>Veja quem é o melhor jogador da sua região.</h2>

            <Link href="/signup">
              <span className={style(styles.btn)}>Entrar no Ritoplz</span>
            </Link>

            <Link href="/rankings">
              <span className={style(styles.btnLink)}>Veja o Rankings</span>
            </Link>

            <img className={style(styles.card)} src="static/card.png" alt=""/>
          </div>
        </main>

        <TopPlayers/>

        <section className={style(styles.tier)}>
          <h2 className={style(styles.tierTitle)}>Compita com jogadores da sua região</h2>
          <h3 className={style(styles.tierSubtitle)}>Rankings por região, campeão, elo e vitórias.</h3>

          <div className={style(styles.tierDrop)}></div>

          <div className={style(styles.row)}>
            <Link href="/signup">
              <span className={style(styles.joinBtn)}>Entre no Ritoplz</span>
            </Link>

            <ul className={style(styles.tierList)}>
              <li className={style(styles.tierItem)}>
                <img src="https://ritoplz-tier.now.sh/bronze_small.png" alt=""/>
                <h3 className={style(styles.tierItemTitle)}>Bronze</h3>
              </li>

              <li className={style(styles.tierItem)}>
                <img src="https://ritoplz-tier.now.sh/silver_small.png" alt=""/>
                <h3 className={style(styles.tierItemTitle)}>Silver</h3>
              </li>

              <li className={style(styles.tierItem)}>
                <img src="https://ritoplz-tier.now.sh/gold_small.png" alt=""/>
                <h3 className={style(styles.tierItemTitle)}>Gold</h3>
              </li>

              <li className={style(styles.tierItem)}>
                <img src="https://ritoplz-tier.now.sh/platinum_small.png" alt=""/>
                <h3 className={style(styles.tierItemTitle)}>Platinum</h3>
              </li>

              <li className={style(styles.tierItem)}>
                <img src="https://ritoplz-tier.now.sh/diamond_small.png" alt=""/>
                <h3 className={style(styles.tierItemTitle)}>Diamond</h3>
              </li>

              <li className={style(styles.tierItem)}>
                <img src="https://ritoplz-tier.now.sh/master_small.png" alt=""/>
                <h3 className={style(styles.tierItemTitle)}>Master</h3>
              </li>

              <li className={style(styles.tierItem)}>
                <img src="https://ritoplz-tier.now.sh/challenger_small.png" alt=""/>
                <h3 className={style(styles.tierItemTitle)}>Challenger</h3>
              </li>
            </ul>
          </div>
        </section>

        <Footer/>
      </div>
    </Provider>
  )
}
