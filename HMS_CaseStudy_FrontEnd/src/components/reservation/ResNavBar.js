import React from 'react'
import {
    NavLink,
    Route,
    Routes
  } from "react-router-dom";
import './ResNavBar.css'


function ResNavBar() {
  return (
      <React.Fragment>
        <nav>
        <ul>
            {/* <li><NavLink to='/recephome'>Home</NavLink></li> */}
            <li><NavLink to='/resadd' className='navlink'>Add</NavLink></li>
            <li><NavLink to='/resupdate' className='navlink'>Update</NavLink></li>
            <li><NavLink to='/resgetall' className='navlink'>GetAll</NavLink></li>
        </ul>
        </nav>
    </React.Fragment>
  )
}

export default ResNavBar