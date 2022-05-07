import React from 'react'
import {
    NavLink,
  } from "react-router-dom";

function OwnerRatesNavBar() {
  return (
      <React.Fragment>
        <ul>
        <li><NavLink to='/ownerhome'>Home</NavLink></li>
        <li><NavLink to='/oaddnewrate'>Add</NavLink></li>
        <li><NavLink to='/ogetrates'>Get All</NavLink></li>
        <li><NavLink to='/oupdaterate'>Update</NavLink></li>
        </ul>
    </React.Fragment>
  )
}

export default OwnerRatesNavBar