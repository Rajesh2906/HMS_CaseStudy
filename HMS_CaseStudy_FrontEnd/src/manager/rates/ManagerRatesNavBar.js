import React from 'react'
import {
    NavLink,
  } from "react-router-dom";

function ManagerRatesNavBar() {
  return (
      <React.Fragment>
        <ul>
        <li><NavLink to='/managerhome'>Home</NavLink></li>
        <li><NavLink to='/maddnewrate'>Add</NavLink></li>
        <li><NavLink to='/mgetrates'>Get All</NavLink></li>
        <li><NavLink to='/mupdaterate'>Update</NavLink></li>
        </ul>
    </React.Fragment>
  )
}

export default ManagerRatesNavBar