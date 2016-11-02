'use strict'

import React, {Component} from 'react'
import axios from 'axios'
import {style} from 'next/css'

export default class extends Component {
  constructor (props) {
    super(props)
    this.submitSummoner = this.submitSummoner.bind(this)

    this.state = {
      user: {
        username: '',
        email: '',
        emailConfirmed: ''
      },
      summoner: {
        code: ''
      },
      profileReceived: false
    }
  }
  
  componentDidMount() {
    const localStorageRef = localStorage.getItem('token')

    axios.get('http://localhost:3001/account', {
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': localStorageRef
      }
    })
    .then(res => {
      console.log(res)

      this.setState({
        user: {
          username: res.data.name,
          email: res.data.email,
          emailConfirmed: res.data.emailConfirmed.toString()
        }
      })
    })
  }

  submitSummoner (e) {
    e.preventDefault()

    const localStorageRef = localStorage.getItem('token')

    axios({
      method: 'post',
      url: 'http://localhost:3001/summoner',
      data: {
        name: this.name.value
      },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorageRef
      }
    }).then(res => {
      console.log(res)

      this.setState({
        summoner: {
          code: res.data.code
        }
      })
    }).catch(err => {
      console.log(err)
    })
  }

  render () {
    return (
      <div>
        <div className={style(styles.row)}>
          <header className={style(styles.header.base)}>
            <h1 className={style(styles.header.title)}>Hello, <span className={style(styles.header.username)}>{this.state.user.username}</span>!</h1>
            <h3 className={style(styles.header.location)}>Sao Paulo, Brazil</h3>

            <hr className={style(styles.header.divider)}/>
          </header>

          <section className={style(styles.addSummoner.base)}>
            <h2 className={style(styles.addSummoner.title)}>You don't have any Summoner yet</h2>
            <h3 className={style(styles.addSummoner.subtitle)}>To join the Ritoplz Ranking you must add your summoner</h3>

            <button className={style(styles.addSummoner.btn)}>Add summoner</button>
          </section>

          <section className={style(styles.summoner.page)}>
            <h2 className={style(styles.summoner.pageTitle)}>My Summoners</h2>

            <article className={style(styles.summoner.base)}>
              <header className={style(styles.summoner.header)}>
                <img className={style(styles.summoner.cover)} src="/static/leona.png" alt="" />
              </header>

              <ul className={style(styles.summoner.info)}>
                <li className={style(styles.summoner.item)}>
                  <h3 className={style(styles.summoner.title)}>Summoner</h3>
                  <span className={style(styles.summoner.subtitle)}>NicoleAniston</span>
                </li>

                <li className={style(styles.summoner.item)}>
                  <h3 className={style(styles.summoner.title)}>Code</h3>
                  <span className={style(styles.summoner.subtitle)}>067283GF</span>
                </li>

                <li className={style(styles.summoner.item)}>
                  <h3 className={style(styles.summoner.title)}>Status</h3>
                  <span>
                    <img className={style(styles.summoner.checkmark)} src="/static/checkmark.png" alt=""/>
                  </span>
                </li>
              </ul> 
            </article>

            <article className={style(styles.summoner.base)}>
              <header className={style(styles.summoner.header)}>
                <img className={style(styles.summoner.cover)} src="/static/ashe.png" alt="" />
              </header>

              <ul className={style(styles.summoner.info)}>
                <li className={style(styles.summoner.item)}>
                  <h3 className={style(styles.summoner.title)}>Summoner</h3>
                  <span className={style(styles.summoner.subtitle)}>NicoleAniston</span>
                </li>

                <li className={style(styles.summoner.item)}>
                  <h3 className={style(styles.summoner.title)}>Code</h3>
                  <span className={style(styles.summoner.subtitle)}>067283GF</span>
                </li>

                <li className={style(styles.summoner.item)}>
                  <h3 className={style(styles.summoner.title)}>Status</h3>
                  <span>
                    <img className={style(styles.summoner.checkmark)} src="/static/checkmark.png" alt=""/>
                  </span>
                </li>
              </ul> 
            </article>

            <article className={style(styles.summoner.base)}>
              <header className={style(styles.summoner.header)}>
                <img className={style(styles.summoner.cover)} src="/static/leona.png" alt="" />
              </header>

              <ul className={style(styles.summoner.info)}>
                <li className={style(styles.summoner.item)}>
                  <h3 className={style(styles.summoner.title)}>Summoner</h3>
                  <span className={style(styles.summoner.subtitle)}>NicoleAniston</span>
                </li>

                <li className={style(styles.summoner.item)}>
                  <h3 className={style(styles.summoner.title)}>Code</h3>
                  <span className={style(styles.summoner.subtitle)}>067283GF</span>
                </li>

                <li className={style(styles.summoner.item)}>
                  <h3 className={style(styles.summoner.title)}>Status</h3>
                  <span>
                    <img className={style(styles.summoner.checkmark)} src="/static/checkmark.png" alt=""/>
                  </span>
                </li>
              </ul> 
            </article>

            <article className={style(styles.summoner.base)}>
              <header className={style(styles.summoner.header)}>
                <img className={style(styles.summoner.cover)} src="/static/ashe.png" alt="" />
              </header>

              <ul className={style(styles.summoner.info)}>
                <li className={style(styles.summoner.item)}>
                  <h3 className={style(styles.summoner.title)}>Summoner</h3>
                  <span className={style(styles.summoner.subtitle)}>NicoleAniston</span>
                </li>

                <li className={style(styles.summoner.item)}>
                  <h3 className={style(styles.summoner.title)}>Code</h3>
                  <span className={style(styles.summoner.subtitle)}>067283GF</span>
                </li>

                <li className={style(styles.summoner.item)}>
                  <h3 className={style(styles.summoner.title)}>Status</h3>
                  <span>
                    <img className={style(styles.summoner.checkmark)} src="/static/checkmark.png" alt=""/>
                  </span>
                </li>
              </ul> 
            </article>
          </section>
        </div>
      </div>
    )
  }
}

const styles = {
  row: {
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'Source Sans Pro'
  },

  header: {
    base: {
      paddingTop: '50px',
      paddingBottom: '30px'
    },

    title: {
      fontSize: '70px',
      fontWeight: '400',
      lineHeight: '70px',
      marginBottom: '20px',
      marginTop: 0,
      color: '#333'
    },

    username: {
      fontWeight: 600
    },

    location: {
      color: '#ccc',
      fontWeight: '400',
      fontSize: '18px',
      lineHeight: '30px',
      marginTop: 0,
      marginBottom: 0
    },

    divider: {
      width: '50px',
      border: '1px solid #F3F5FB',
      marginTop: '30px',
      marginLeft: 0
    }
  },

  addSummoner: {
    base: {
      border: '1px solid #F3F5FB',
      borderRadius: '10px',
      textAlign: 'center',
      paddingTop: '50px',
      paddingBottom: '50px',
      boxShadow: '0 10px 50px rgba(0, 0, 0, .025)',
      marginBottom: '70px'
    },

    title: {
      color: '#333',
      fontWeight: '400',
      fontSize: '2rem',
      marginBottom: '15px',
    },

    subtitle: {
      color: '#ccc',
      marginTop: 0,
      fontWeight: '300',
      fontSize: '20px',
      lineHeight: '33px',
      maxWidth: '320px',
      marginLeft: 'auto',
      marginRight: 'auto'
    },

    btn: {
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      padding: '10px 25px',
      fontSize: '.9rem',
      height: '50px',
      marginTop: '30px',
      fontWeight: '500',
      cursor: 'pointer',
      background: '-moz-linear-gradient(left, #52bdab 0%, #6BB6D6 100%)',
      background: '-webkit-linear-gradient(left, #52bdab 0%,#6BB6D6 100%)',
      background: 'linear-gradient(to right, #52bdab 0%,#6BB6D6 100%)'
    }
  },

  summoner: {
    page: {
      display: 'flex',
      flexFlow: 'row wrap',
      alignItems: 'center',
    },

    pageTitle: {
      color: '#333',
      marginBottom: '50px',
      fontWeight: 400,
      flexBasis: '100%'
    },

    base: {
      flexBasis: 'calc(50% - 30px)',
      margin: '15px'
    },

    header: {
      maxHeight: '228px'
    },

    cover: {
      width: '100%'
    },

    info: {
      borderLeft: '1px solid #F3F5FB',
      borderBottom: '1px solid #F3F5FB',
      borderRight: '1px solid #F3F5FB',
      marginTop: 0,
      width: '100%',
      paddingLeft: 0,
      paddingRight: 0,
      boxSizing: 'border-box',
      borderBottomRightRadius: '10px',
      borderBottomLeftRadius: '10px'
    },

    item: {
      display: 'inline-block',
      width: '33.33%',
      textAlign: 'center',
      paddingTop: '20px',
      paddingBottom: '20px'
    },


    title: {
      marginTop: 0,
      fontWeight: 400,
      fontSize: '.9rem',
      color: '#ccc',
      marginBottom: '5px'
    },

    subtitle: {
      fontSize: '1.2rem',
      fontWeight: 600,
      color: '#333'
    },

    checkmark: {
      verticalAlign: 'middle'
    }
  }
}
