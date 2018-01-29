import React, { Component } from 'react'
import './GoldStar.css'

class GoldStar extends React.Component {

  render() {
    return (
      <div className='flexContainer'>
        {this.props.perfectGame && this.props.matchesComplete != 0 ?
          <div className='flexContainer'>
            <img className='star' src={require("../../../images/gold-star.png")} />
          </div>
          :
          <div className='flexContainer'>
            <img src={require("../../../images/gold-star-empty.png")} />
          </div>
        }
        <div className='info'>
          <p className='text'><span>Play a perfect game, earn a gold star!</span></p>
          <p className='text'>Find all matches without turning over any single card more than twice.</p>
        </div>
      </div>
    )
  }
}


export default GoldStar
