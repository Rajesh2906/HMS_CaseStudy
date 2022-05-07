import React from 'react'
import {
    NavLink,
    Route,
    Routes
  } from "react-router-dom";


function OwnerBillNavBar() {
  return (
      <React.Fragment>
        <ul>
            <li><NavLink to='/ownerhome'>Home</NavLink></li>
            <li><NavLink to='/ogeneratebill'>Generate</NavLink></li>
            <li><NavLink to='/ogetallbills'>All Bills</NavLink></li>
            <li><NavLink to='/oprintbill'>Print Bill</NavLink></li>
        </ul>
    </React.Fragment>
  )
}

export default OwnerBillNavBar