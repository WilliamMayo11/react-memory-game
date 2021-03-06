import React, { Component } from 'react'
import './ScoreBoard.css'

class ScoreBoard extends React.Component {

  ComponentWillReceiveProps() {
    console.log('perfect game: ', this.props.perfectGame)
  }

  render() {
    return (
        <div className='flexo'>
          <p className='text'>Matches:</p>
          <p className='text'>{this.props.matchesComplete}</p><p className='text'>/</p>{this.props.level === 'easy' ? <p className='text'>4</p> : <p className='text'>8</p>}
        </div>
    )
  }
}


export default ScoreBoard
