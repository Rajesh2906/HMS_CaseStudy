import React from 'react'
import {
    NavLink,
    Route,
    Routes
  } from "react-router-dom";

function RecepGusNavBar() {
  return (
      <React.Fragment>
        <ul>
            <li><NavLink to='/recephome'>Home</NavLink></li>
            <li><NavLink to='/rguestadd'>Add New Guest</NavLink></li>
            <li><NavLink to='/rguestupdate'>Update</NavLink></li>
            <li><NavLink to='/rguestgetall'>GetAll</NavLink></li>
            <li><NavLink to='/rguestcheckout'>Checkout Guest</NavLink></li>
            <li><NavLink to='/rguestaddreserved'>Add Reserved Guest</NavLink></li>
            <li><NavLink to='/rguestdelete'>Delete Guest Details</NavLink></li>
        </ul>
    </React.Fragment>
  )
}

export default RecepGusNavBar