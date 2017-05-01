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
            justifyContent: space-between;
            alignItems: center;
          }

          .title {
            color: #333;
            marginBottom: 50px;
            fontWeight: 400
          }

          .btn {
            color: #fff;
            border: none;
            borderRadius: 5px;
            padding: 10px 25px;
            fontSize: .9rem;
            height: 50px;
            marginTop: -50px;
            fontWeight: 500;
            cursor: pointer;
            background: linear-gradient(to right, #52bdab 0%,#6BB6D6 100%);
          }

          .row {
            marginLeft: -15px;
            marginRight: -15px;
            display: flex;
            flexFlow: row wrap;
            alignItems: center;
            justifyContent: space-between;
          }
        `}</style>
      </section>
    )
  }
}

export default MySummoners
