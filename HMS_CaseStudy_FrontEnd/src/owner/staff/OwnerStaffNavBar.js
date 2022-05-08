import React from 'react'
import {NavLink} from "react-router-dom";
import './OwnerStaffNavBar.css'

function OwnerStaffNavBar() {
  return (
    <div className='ownerstaffnavbar'>
      <ul>
            <li><NavLink to='/ownerhome'>Home</NavLink></li>
            <li><NavLink to='/oaddstaff'>Add Staff</NavLink></li>
            <li><NavLink to='/oupdatestaff'>Update Staff Details</NavLink></li>
            <li><NavLink to='/ogetallstaff'>Get All Staff</NavLink></li>
            <li><NavLink to='/odeletestaff'>Remove Staff</NavLink></li>
        </ul>
    </div>
  )
}

export default OwnerStaffNavBar;