import React, { Component } from 'react'
import './Game.css'
import GameContainer from './GameContainer/GameContainer.js'

class Game extends React.Component {

    render() {
    return (
        <div className="containerOuter">
            <div className="containerInner">
                <h1 className="header">MEMORY</h1>
                <GameContainer />
            </div>
        </div>
    )
	}
}

export default Game
