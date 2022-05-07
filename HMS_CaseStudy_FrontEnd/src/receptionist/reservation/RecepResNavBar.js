import React from 'react'
import {
    NavLink,
    Route,
    Routes
  } from "react-router-dom";
  import './RecepResNavBar.css'



function RecepResNavBar() {
  return (
      <React.Fragment>
        <div className='resnavbar'>
        <ul>
            <li><NavLink to='/rreservationadd'>Add</NavLink></li>
            <li><NavLink to='/rresupdate'>Update</NavLink></li>
            <li><NavLink to='/rresgetall'>GetAll</NavLink></li>
            <li><NavLink to='/recephome'>Home</NavLink></li>
        </ul>
        </div>
    </React.Fragment>
  )
}

export default RecepResNavBar