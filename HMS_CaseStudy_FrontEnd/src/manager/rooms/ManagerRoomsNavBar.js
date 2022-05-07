import React from 'react'
import {NavLink} from "react-router-dom";
import './ManagerRoomsNavBar.css'

function ManagerRoomsNavBar() {
  return (
    <div className='mroomsnavbar'>
      <ul>
            <li><NavLink to='/managerhome'>Home|</NavLink></li>
            <li><NavLink to='/maddroom'>Add Room|</NavLink></li>
            <li><NavLink to='/mgetallrooms'>Show Rooms|</NavLink></li>
            <li><NavLink to='/mdeleteroom'>Delete Rooms|</NavLink></li>
        </ul>
    </div>
  )
}

export default ManagerRoomsNavBar;