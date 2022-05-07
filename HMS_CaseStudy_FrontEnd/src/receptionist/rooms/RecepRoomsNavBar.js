import React from 'react'
import {NavLink} from "react-router-dom";

function RecepRoomsNavBar() {
  return (
    <div className='resnavbar'>
      <ul>
            <li><NavLink to='/recephome'>Home</NavLink></li>
        </ul>
    </div>
  )
}

export default RecepRoomsNavBar;