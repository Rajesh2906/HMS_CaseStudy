import React from 'react'
import {
    NavLink,
    Route,
    Routes
  } from "react-router-dom";
import ResAdd from './ResAdd';
import ResGetAll from './ResGetAll';
import ResGetById from './ResGetById';
import ResUpdate from './ResUpdate';


function ResNavBar() {
  return (
      <React.Fragment>
     
        
        <ul>
            {/* <li><NavLink to='/recephome'>Home</NavLink></li> */}
            <li><NavLink to='/resadd'>Add</NavLink></li>
            <li><NavLink to='/resupdate'>Update</NavLink></li>
            <li><NavLink to='/resgetall'>GetAll</NavLink></li>
            <li><NavLink to='/resgetbyid'>GetById</NavLink></li>
            <li><NavLink to='/getallres'>GetAllRes</NavLink></li>
        </ul>
    </React.Fragment>
  )
}

export default ResNavBar