import React from 'react'
import {NavLink} from "react-router-dom";
import './OwnerDepartmentNavBar.css'

function OwnerDepartmentNavBar() {
  return (
      <React.Fragment>
        <div className='odepartmentnavbar'>
          <ul>
            <li><NavLink to='/ownerhome'>Home</NavLink></li>
            <li><NavLink to='/oadddepartment'>Add</NavLink></li>
            <li><NavLink to='/ogetdepartments'>Get All</NavLink></li>
          </ul>
        </div>
    </React.Fragment>
  )
}

export default OwnerDepartmentNavBar