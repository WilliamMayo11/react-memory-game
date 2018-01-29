import React, { Component } from 'react'
import EasyGame from '../EasyGame/EasyGame'
import DifficultGame from '../DifficultGame/DifficultGame'
import fetch from 'isomorphic-fetch'
import './GameBoard.css'

class GameBoard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      easyCards: [],
      difficultCards: [],
    }
  }

  componentWillMount() {
      const easy = ["☀", "☀", "☾", "☾", "☁", "☁", "★", "★"];
      const hard = ["☀", "☀", "☾", "☾", "☁", "☁", "★", "★", "♢", "♢", "♯", "♯", "⚐", "⚐", "✂", "✂"];
      this.updateCards(easy, hard)
      this.props.resetGame()
  }

  updateCards(easy, hard) {
    this.setState({
      easyCards: easy,
      difficultCards: hard,
    })
  }

  renderLevel() {
    if (this.props.level === 'easy') {
      return <EasyGame
                easyCards={this.state.easyCards}
                startGame={this.props.startGame}
                endGame={this.props.endGame}
                resetGame={this.props.resetGame}
                updateMatchesTally={this.props.updateMatchesTally}
                updatePerfectGame={this.props.updatePerfectGame}
                cardBackground={this.props.cardBackground}
            />
    } else if (this.props.level === 'difficult') {
      return <DifficultGame
                difficultCards={this.state.difficultCards}
                startGame={this.props.startGame}
                endGame={this.props.endGame}
                resetGame={this.props.resetGame}
                updateMatchesTally={this.props.updateMatchesTally}
                updatePerfectGame={this.props.updatePerfectGame}
                cardBackground={this.props.cardBackground}
              />
    } else {
      return
    }
  }

  render() {
    return (
      this.props.level === 'easy' ? <div className='gameboardeasy'>{this.renderLevel()}</div> : <div className='gameboarddifficult'>{this.renderLevel()}</div>
    )
  }
}

export default GameBoard
