import React from 'react'
import {
    NavLink,
    Route,
    Routes
  } from "react-router-dom";


function RecepBillNavBar() {
  return (
      <React.Fragment>
        <ul>
            {/* <li><NavLink to='/recephome'>Home</NavLink></li> */}
            <li><NavLink to='/rbillgenerate'>Generate</NavLink></li>
            <li><NavLink to='/rgetallbills'>All Bills</NavLink></li>
            <li><NavLink to='/rprintbill'>Print Bill</NavLink></li>
            <li><NavLink to='/recephome'>ReseptionistHome</NavLink></li>
        </ul>
    </React.Fragment>
  )
}

export default RecepBillNavBar