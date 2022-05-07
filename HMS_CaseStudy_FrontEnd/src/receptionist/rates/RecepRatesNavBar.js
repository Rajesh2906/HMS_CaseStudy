import React from 'react'
import {
    NavLink,
  } from "react-router-dom";

function RecepRatesNavBar() {
  return (
      <React.Fragment>
        <div className='resnavbar'>
        <ul>
        <li><NavLink to='/recephome'>Home</NavLink></li>
        </ul>
        </div>
    </React.Fragment>
  )
}

export default RecepRatesNavBar