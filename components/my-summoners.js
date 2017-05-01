'use strict'

import React, { Component } from 'react'
import summonerCover from 'ritoplz-summoner'

import Summoner from './summoner'
import ModalAddSummoner from './../containers/modal-add-summoner'

class MySummoners extends Component {
  constructor () {
    super()

    this.handleModal = this.handleModal.bind(this)
    this.openTutorial = this.openTutorial.bind(this)

    this.state = {
      modalAddSummoner: false
    }
  }

  openTutorial () {
    this.setState({
      modalTutorial: true
    })
  }

  handleModal () {
    this.setState({
      modalAddSummoner: !this.state.modalAddSummoner,
      modalTutorial: false
    })
  }

  render () {
    return (
      <section>
        <header className="header">
          <h2 className="title">Meus Invocadores</h2>
          <button className="btn" onClick={this.handleModal}>Adicionar Invocador</button>
        </header>

        <div className="row">
          {this.props.summoners.map((summoner, i) => {
            const cover = summonerCover()

            return <Summoner key={i} cover={cover} name={summoner.name} code={summoner.code} status={summoner.active} confirmSummoner={this.props.confirmSummoner} requesting={this.props.requesting}/>
          })}
        </div>

        <ModalAddSummoner open={this.state.modalAddSummoner}/>

        <style jsx>{`
          .header {
            display: flex;
            justify-content: space-between;
            alignItems: center;
          }

          .title {
            color: #333;
            margin-bottom: 50px;
            font-weight: 400
          }

          .btn {
            color: #fff;
            border: none;
            border-radius: 5px;
            padding: 10px 25px;
            font-size: .9rem;
            height: 50px;
            margin-top: -50px;
            font-weight: 500;
            cursor: pointer;
            background: linear-gradient(to right, #52bdab 0%,#6BB6D6 100%);
          }

          .row {
            margin-left: -15px;
            margin-right: -15px;
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            justify-content: space-between;
          }
        `}</style>
      </section>
    )
  }
}

export default MySummoners
