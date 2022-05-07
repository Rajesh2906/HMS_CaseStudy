import React from 'react'
import {NavLink} from "react-router-dom";

function ManagerStaffNavBar() {
  return (
    <div>
      <ul>
            <li><NavLink to='/managerhome'>Home</NavLink></li>
            <li><NavLink to='/maddstaff'>Add Staff</NavLink></li>
            <li><NavLink to='/mupdatestaff'>Update Staff Details</NavLink></li>
            <li><NavLink to='/mgetallstaff'>Get All Staff</NavLink></li>
            <li><NavLink to='/mdeletestaff'>Remove Staff</NavLink></li>
        </ul>
    </div>
  )
}

export default ManagerStaffNavBar;
