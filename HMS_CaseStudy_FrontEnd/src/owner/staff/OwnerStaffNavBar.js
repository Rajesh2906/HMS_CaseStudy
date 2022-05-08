import React from 'react'
import {NavLink} from "react-router-dom";
import './OwnerStaffNavBar.css'

function OwnerStaffNavBar() {
  return (
    <div className='ownerstaffnavbar'>
      <ul>       
            <li><NavLink to='/oaddstaff'>Add</NavLink></li>
            <li><NavLink to='/oupdatestaff'>Update</NavLink></li>
            <li><NavLink to='/ogetallstaff'>Get All</NavLink></li>
            <li><NavLink to='/odeletestaff'>Remove</NavLink></li>
            <li><NavLink to='/ownerhome'>Home</NavLink></li>
        </ul>
    </div>
  )
}

export default OwnerStaffNavBar;