import React from 'react'
import {NavLink} from "react-router-dom";
import './ManagerStaffNavBar.css';

function ManagerStaffNavBar() {
  return (
    <div className='mstaffnavbar'>
      <ul>
            <li><NavLink to='/managerhome'>Home</NavLink></li>
            <li><NavLink to='/maddstaff'>Add</NavLink></li>
            <li><NavLink to='/mupdatestaff'>Update</NavLink></li>
            <li><NavLink to='/mgetallstaff'>Get</NavLink></li>
            <li><NavLink to='/mdeletestaff'>Remove</NavLink></li>
        </ul>
    </div>
  )
}

export default ManagerStaffNavBar;