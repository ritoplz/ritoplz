'use strict'

import React from 'react'
import { style, insertRule } from 'next/css'
import getTier from 'ritoplz-tier'

import Header from './../components/header'
import Featured from './../components/featured'

const styles = {
  ranking: {
    display: 'flex'
  },

  rankingList: {
    flexBasis: '40%',
    maxHeight: 'calc(100vh - 70px)',
    overflow: 'auto'
  },

  rankingItem: {
    display: 'flex',
    height: '85px',
    paddingLeft: '25px',
    paddingRight: '25px',
    borderBottom: '1px solid #f2f2f2'
  },

  position: {
    lineHeight: '85px',
    flexBasis: '10%',
    color: '#333'
  },

  image: {
    flexBasis: '20%',
    marginTop: '15px'
  },

  avatar: {
    height: '50px',
    width: '50px',
    borderRadius: '5px'
  },

  rankingInfo: {
    marginTop: '20px',
    flexBasis: '50%'
  },

  username: {
    fontSize: '1.25rem',
    fontWeight: '400',
    color: '#333'
  },

  summoner: {
    fontSize: '1rem',
    fontWeight: '400',
    color: 'rgba(0, 0, 0, .5)'
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
          <li className={style(styles.rankingItem)}>
            <h4 className={style(styles.position)}>1.</h4>

            <figure className={style(styles.image)}>
              <img className={style(styles.avatar)} src="https://s3.amazonaws.com/uifaces/faces/twitter/peterme/128.jpg" alt="" />
            </figure>

            <div className={style(styles.rankingInfo)}>
              <h2 className={style(styles.username)}>Sue Dixon</h2>
              <h3 className={style(styles.summoner)}>nicoleaniston</h3>
            </div>

            <img className={style(styles.flag)} src={flag} alt="" />
          </li>

          <li className={style(styles.rankingItem)}>
            <h4 className={style(styles.position)}>1.</h4>

            <figure className={style(styles.image)}>
              <img className={style(styles.avatar)} src="https://s3.amazonaws.com/uifaces/faces/twitter/peterme/128.jpg" alt="" />
            </figure>

            <div className={style(styles.rankingInfo)}>
              <h2 className={style(styles.username)}>Sue Dixon</h2>
              <h3 className={style(styles.summoner)}>nicoleaniston</h3>
            </div>

            <img className={style(styles.flag)} src={flag} alt="" />
          </li>

          <li className={style(styles.rankingItem)}>
            <h4 className={style(styles.position)}>1.</h4>

            <figure className={style(styles.image)}>
              <img className={style(styles.avatar)} src="https://s3.amazonaws.com/uifaces/faces/twitter/peterme/128.jpg" alt="" />
            </figure>

            <div className={style(styles.rankingInfo)}>
              <h2 className={style(styles.username)}>Sue Dixon</h2>
              <h3 className={style(styles.summoner)}>nicoleaniston</h3>
            </div>

            <img className={style(styles.flag)} src={flag} alt="" />
          </li>

          <li className={style(styles.rankingItem)}>
            <h4 className={style(styles.position)}>1.</h4>

            <figure className={style(styles.image)}>
              <img className={style(styles.avatar)} src="https://s3.amazonaws.com/uifaces/faces/twitter/peterme/128.jpg" alt="" />
            </figure>

            <div className={style(styles.rankingInfo)}>
              <h2 className={style(styles.username)}>Sue Dixon</h2>
              <h3 className={style(styles.summoner)}>nicoleaniston</h3>
            </div>

            <img className={style(styles.flag)} src={flag} alt="" />
          </li>

          <li className={style(styles.rankingItem)}>
            <h4 className={style(styles.position)}>1.</h4>

            <figure className={style(styles.image)}>
              <img className={style(styles.avatar)} src="https://s3.amazonaws.com/uifaces/faces/twitter/peterme/128.jpg" alt="" />
            </figure>

            <div className={style(styles.rankingInfo)}>
              <h2 className={style(styles.username)}>Sue Dixon</h2>
              <h3 className={style(styles.summoner)}>nicoleaniston</h3>
            </div>

            <img className={style(styles.flag)} src={flag} alt="" />
          </li>

          <li className={style(styles.rankingItem)}>
            <h4 className={style(styles.position)}>1.</h4>

            <figure className={style(styles.image)}>
              <img className={style(styles.avatar)} src="https://s3.amazonaws.com/uifaces/faces/twitter/peterme/128.jpg" alt="" />
            </figure>

            <div className={style(styles.rankingInfo)}>
              <h2 className={style(styles.username)}>Sue Dixon</h2>
              <h3 className={style(styles.summoner)}>nicoleaniston</h3>
            </div>

            <img className={style(styles.flag)} src={flag} alt="" />
          </li>

          <li className={style(styles.rankingItem)}>
            <h4 className={style(styles.position)}>1.</h4>

            <figure className={style(styles.image)}>
              <img className={style(styles.avatar)} src="https://s3.amazonaws.com/uifaces/faces/twitter/peterme/128.jpg" alt="" />
            </figure>

            <div className={style(styles.rankingInfo)}>
              <h2 className={style(styles.username)}>Sue Dixon</h2>
              <h3 className={style(styles.summoner)}>nicoleaniston</h3>
            </div>

            <img className={style(styles.flag)} src={flag} alt="" />
          </li>

          <li className={style(styles.rankingItem)}>
            <h4 className={style(styles.position)}>1.</h4>

            <figure className={style(styles.image)}>
              <img className={style(styles.avatar)} src="https://s3.amazonaws.com/uifaces/faces/twitter/peterme/128.jpg" alt="" />
            </figure>

            <div className={style(styles.rankingInfo)}>
              <h2 className={style(styles.username)}>Sue Dixon</h2>
              <h3 className={style(styles.summoner)}>nicoleaniston</h3>
            </div>

            <img className={style(styles.flag)} src={flag} alt="" />
          </li>

          <li className={style(styles.rankingItem)}>
            <h4 className={style(styles.position)}>1.</h4>

            <figure className={style(styles.image)}>
              <img className={style(styles.avatar)} src="https://s3.amazonaws.com/uifaces/faces/twitter/peterme/128.jpg" alt="" />
            </figure>

            <div className={style(styles.rankingInfo)}>
              <h2 className={style(styles.username)}>Sue Dixon</h2>
              <h3 className={style(styles.summoner)}>nicoleaniston</h3>
            </div>

            <img className={style(styles.flag)} src={flag} alt="" />
          </li>

          <li className={style(styles.rankingItem)}>
            <h4 className={style(styles.position)}>1.</h4>

            <figure className={style(styles.image)}>
              <img className={style(styles.avatar)} src="https://s3.amazonaws.com/uifaces/faces/twitter/peterme/128.jpg" alt="" />
            </figure>

            <div className={style(styles.rankingInfo)}>
              <h2 className={style(styles.username)}>Sue Dixon</h2>
              <h3 className={style(styles.summoner)}>nicoleaniston</h3>
            </div>

            <img className={style(styles.flag)} src={flag} alt="" />
          </li>

          <li className={style(styles.rankingItem)}>
            <h4 className={style(styles.position)}>1.</h4>

            <figure className={style(styles.image)}>
              <img className={style(styles.avatar)} src="https://s3.amazonaws.com/uifaces/faces/twitter/peterme/128.jpg" alt="" />
            </figure>

            <div className={style(styles.rankingInfo)}>
              <h2 className={style(styles.username)}>Sue Dixon</h2>
              <h3 className={style(styles.summoner)}>nicoleaniston</h3>
            </div>

            <img className={style(styles.flag)} src={flag} alt="" />
          </li>

          <li className={style(styles.rankingItem)}>
            <h4 className={style(styles.position)}>1.</h4>

            <figure className={style(styles.image)}>
              <img className={style(styles.avatar)} src="https://s3.amazonaws.com/uifaces/faces/twitter/peterme/128.jpg" alt="" />
            </figure>

            <div className={style(styles.rankingInfo)}>
              <h2 className={style(styles.username)}>Sue Dixon</h2>
              <h3 className={style(styles.summoner)}>nicoleaniston</h3>
            </div>

            <img className={style(styles.flag)} src={flag} alt="" />
          </li>

          <li className={style(styles.rankingItem)}>
            <h4 className={style(styles.position)}>1.</h4>

            <figure className={style(styles.image)}>
              <img className={style(styles.avatar)} src="https://s3.amazonaws.com/uifaces/faces/twitter/peterme/128.jpg" alt="" />
            </figure>

            <div className={style(styles.rankingInfo)}>
              <h2 className={style(styles.username)}>Sue Dixon</h2>
              <h3 className={style(styles.summoner)}>nicoleaniston</h3>
            </div>

            <img className={style(styles.flag)} src={flag} alt="" />
          </li>

          <li className={style(styles.rankingItem)}>
            <h4 className={style(styles.position)}>1.</h4>

            <figure className={style(styles.image)}>
              <img className={style(styles.avatar)} src="https://s3.amazonaws.com/uifaces/faces/twitter/peterme/128.jpg" alt="" />
            </figure>

            <div className={style(styles.rankingInfo)}>
              <h2 className={style(styles.username)}>Sue Dixon</h2>
              <h3 className={style(styles.summoner)}>nicoleaniston</h3>
            </div>

            <img className={style(styles.flag)} src={flag} alt="" />
          </li>

          <li className={style(styles.rankingItem)}>
            <h4 className={style(styles.position)}>1.</h4>

            <figure className={style(styles.image)}>
              <img className={style(styles.avatar)} src="https://s3.amazonaws.com/uifaces/faces/twitter/peterme/128.jpg" alt="" />
            </figure>

            <div className={style(styles.rankingInfo)}>
              <h2 className={style(styles.username)}>Sue Dixon</h2>
              <h3 className={style(styles.summoner)}>nicoleaniston</h3>
            </div>

            <img className={style(styles.flag)} src={flag} alt="" />
          </li>

          <li className={style(styles.rankingItem)}>
            <h4 className={style(styles.position)}>1.</h4>

            <figure className={style(styles.image)}>
              <img className={style(styles.avatar)} src="https://s3.amazonaws.com/uifaces/faces/twitter/peterme/128.jpg" alt="" />
            </figure>

            <div className={style(styles.rankingInfo)}>
              <h2 className={style(styles.username)}>Sue Dixon</h2>
              <h3 className={style(styles.summoner)}>nicoleaniston</h3>
            </div>

            <img className={style(styles.flag)} src={flag} alt="" />
          </li>

          <li className={style(styles.rankingItem)}>
            <h4 className={style(styles.position)}>1.</h4>

            <figure className={style(styles.image)}>
              <img className={style(styles.avatar)} src="https://s3.amazonaws.com/uifaces/faces/twitter/peterme/128.jpg" alt="" />
            </figure>

            <div className={style(styles.rankingInfo)}>
              <h2 className={style(styles.username)}>Sue Dixon</h2>
              <h3 className={style(styles.summoner)}>nicoleaniston</h3>
            </div>

            <img className={style(styles.flag)} src={flag} alt="" />
          </li>

          <li className={style(styles.rankingItem)}>
            <h4 className={style(styles.position)}>1.</h4>

            <figure className={style(styles.image)}>
              <img className={style(styles.avatar)} src="https://s3.amazonaws.com/uifaces/faces/twitter/peterme/128.jpg" alt="" />
            </figure>

            <div className={style(styles.rankingInfo)}>
              <h2 className={style(styles.username)}>Sue Dixon</h2>
              <h3 className={style(styles.summoner)}>nicoleaniston</h3>
            </div>

            <img className={style(styles.flag)} src={flag} alt="" />
          </li>

          <li className={style(styles.rankingItem)}>
            <h4 className={style(styles.position)}>1.</h4>

            <figure className={style(styles.image)}>
              <img className={style(styles.avatar)} src="https://s3.amazonaws.com/uifaces/faces/twitter/peterme/128.jpg" alt="" />
            </figure>

            <div className={style(styles.rankingInfo)}>
              <h2 className={style(styles.username)}>Sue Dixon</h2>
              <h3 className={style(styles.summoner)}>nicoleaniston</h3>
            </div>

            <img className={style(styles.flag)} src={flag} alt="" />
          </li>
        </ul>
      </section>
    </div>
  )
}

insertRule('* {padding: 0; margin: 0; box-sizing: border-box; font-family: Source Sans Pro, Helvetica Neue, Helvetica }')
