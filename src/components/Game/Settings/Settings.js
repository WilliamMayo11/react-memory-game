import React from 'react'
import style from './Settings.css'
// import settingsIcon from '../../../images/settings-icon.png'

const Settings = ({openSettings}) => (
    <div className='flexContainer' onClick={openSettings}>
      <img className='settingsIcon' src={require("../../../images/settings-icon.png")} />
    </div>
)

export default Settings
