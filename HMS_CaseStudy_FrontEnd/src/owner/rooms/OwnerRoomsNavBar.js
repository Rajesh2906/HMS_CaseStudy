import React from 'react'
import {NavLink} from "react-router-dom";
import './OwnerRoomsNavBar'

function OwnerRoomsNavBar() {
  return (
      <div className='oroomsnavbar'>
      <ul>
            <li><NavLink to='/oaddroom'>Add Room</NavLink></li>
            <li><NavLink to='/ogetallrooms'>Get All Rooms</NavLink></li>
            <li><NavLink to='/odeleteroom'>Delete Rooms</NavLink></li>
            <li><NavLink to='/ownerhome'>Home</NavLink></li>
        </ul>
      </div>
  )
}

export default OwnerRoomsNavBar;