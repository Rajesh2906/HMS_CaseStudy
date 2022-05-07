import React from 'react'
import {NavLink} from "react-router-dom";

function ManagerRoomsNavBar() {
  return (
    <div>
      <ul>
            <li><NavLink to='/managerhome'>Home</NavLink></li>
            <li><NavLink to='/maddroom'>Add Room</NavLink></li>
            <li><NavLink to='/mgetallrooms'>Get All Rooms</NavLink></li>
            <li><NavLink to='/mdeleteroom'>Delete Rooms</NavLink></li>
        </ul>
    </div>
  )
}

export default ManagerRoomsNavBar;
