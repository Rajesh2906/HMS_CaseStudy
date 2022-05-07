import React from 'react'
import {
    NavLink,
  } from "react-router-dom";

function OwnerDepartmentNavBar() {
  return (
      <React.Fragment>
        <ul>
        <li><NavLink to='/ownerhome'>Home</NavLink></li>
        <li><NavLink to='/oadddepartment'>Add</NavLink></li>
        <li><NavLink to='/ogetdepartments'>Get All</NavLink></li>
        </ul>
    </React.Fragment>
  )
}

export default OwnerDepartmentNavBar