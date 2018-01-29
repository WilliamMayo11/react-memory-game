import React, { Component } from 'react'
import './GameContainer.css'
import GameBoard from '../GameBoard/GameBoard'
import Toolbar from '../Toolbar/Toolbar.js'
import DifficultySelector from '../DifficultySelector/DifficultySelector.js'
import Modal from 'react-modal'

let _this;

class GameContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      level: '',
      gameStarted: false,
      gameEnded: false,
      winModalOpen: false,
      settingsModalOpen: false,
      rulesModalOpen: false,
      matchesComplete: 0,
      perfectGame: true,
      cardBackground: 'nyc',
      time: ''
    }
    _this = this;
  }

  componentWillMount() {
    this.setState({
      level: 'easy'
    })
  }

// CHANGE LEVELS AND RESET GAME
  toggle(difficulty) {
    this.setState({
      level: difficulty,
      gameStarted: false,
      gameEnded: false,
      matchesComplete: 0,
      perfectGame: true
    })
  }

  startGame() {
    this.setState({
      gameStarted: true,
      gameEnded: false
    })
  }

  endGame() {
    this.setState({
      gameEnded: true,
      gameStarted: false,
      winModalOpen: true
    })
  }

  updateMatchesTally() {
    this.setState({
      matchesComplete: this.state.matchesComplete + 1
    })
  }

  resetGame() {
    this.setState({
      gameStarted: false,
      gameEnded: false,
    })
    this.closeWinModal()
    setTimeout(() => {this.resetLevel1(this.state.level)}, 100)
  }

  resetLevel1(level) {
    this.setState({
      level: '',
      matchesComplete: 0
    })
    setTimeout(() => {this.resetLevel2(level)}, 100)
  }

  resetLevel2(level) {
    this.setState({
      level: level,
      perfectGame: true
    })
  }


  closeWinModal() {
    _this.setState({
      winModalOpen: false
    })
  }

  openSettingsModal() {
    _this.setState({
      settingsModalOpen: true
    })
  }

  closeSettingsModal() {
    _this.setState({
      settingsModalOpen: false
    })
  }

  openRulesModal() {
    _this.setState({
      rulesModalOpen: true
    })
  }

  closeRulesModal() {
    _this.setState({
      rulesModalOpen: false
    })
  }

  updatePerfectGame() {
    _this.setState({
      perfectGame: false
    })
  }

  handleBackgroundChange(e) {
    _this.setState({
      cardBackground: e.target.value
    })
  }

  getGameTime(time) {
    this.setState({
      time: time
    })
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.winModalOpen}
          // onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeWinModal}
          className='modal'
          contentLabel="Win Dialog Box"
        >
          <div className='modalcontainer'>
            <h2 className='flexitem1'>You win!</h2>
            <div className='timeContainer'>
              <h2 className='flexitem2'>Time: {this.state.time}</h2>
            </div>
            <div className='achievementcontainer'>
              {this.state.perfectGame ? <h2 className='perfect'>Perfect Game Achievement!</h2> : null}
              {this.state.perfectGame ? <img className='goldstar' src={require("../../../images/gold-star.png")} /> : null}
            </div>
            <h2 className='flexitem2' onClick={() => {this.resetGame()}}>Play again?</h2>
            <h2 className='button' onClick={this.closeWinModal}>Close</h2>
          </div>
        </Modal>
        <Modal
          isOpen={this.state.settingsModalOpen}
          // onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeSettingsModal}
          className='modal'
          contentLabel="Settings"
        >
          <div className='modalcontainer'>
            <h2 className='flexitem1'>Settings</h2>
            <div className='selectorflex'>
              <p className='ptext'>Select a card background:</p>
              <select className='flexitem3' value={this.state.cardBackground} onChange={this.handleBackgroundChange}>
                <option value="nyc">New York</option>
                <option value="aqua">Aqua</option>
                <option value="magma">Magma</option>
                <option value="classic">Classic</option>
                <option value="snow">Snow</option>
              </select>
            </div>
            <h2 className='button' onClick={this.closeSettingsModal}>Close</h2>
          </div>
        </Modal>
        <Modal
          isOpen={this.state.rulesModalOpen}
          // onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeRulesModal}
          className='modal'
          contentLabel="Rules Modal"
        >
          <div className='modalcontainer'>
            <h2 className='flexitem1'>How to Play</h2>
            <div className='flexitem2'>
              <p className='rules'>Find all the matching pairs: Select two cards and see if they match.
              If they do, they will disappear from the board. If not,
              the cards flip back over. Win a perfect game by finding all matches without
              flipping any card more than twice.</p>
            </div>
            <h2 className='button' onClick={this.closeRulesModal}>Close</h2>
          </div>
        </Modal>
        <DifficultySelector
          toggle={this.toggle.bind(this)}
          resetGame={this.resetGame.bind(this)}
          level={this.state.level}
          openRulesModal={this.openRulesModal.bind(this)}
        />
        <hr />
        <div className='toolbar'>
          <Toolbar
            gameStarted={this.state.gameStarted}
            gameEnded={this.state.gameEnded}
            openSettings={this.openSettingsModal}
            matchesComplete={this.state.matchesComplete}
            level={this.state.level}
            perfectGame={this.state.perfectGame}
            getGameTime={this.getGameTime.bind(this)}
          />
        </div>
        <div className='gameboard'>
          <GameBoard
            level={this.state.level}
            startGame={this.startGame.bind(this)}
            endGame={this.endGame.bind(this)}
            resetGame={this.resetGame.bind(this)}
            updateMatchesTally={this.updateMatchesTally.bind(this)}
            updatePerfectGame={this.updatePerfectGame.bind(this)}
            cardBackground={this.state.cardBackground}
          />
        </div>
        <div className='footer'></div>
      </div>
    )
  }
}

export default GameContainer
