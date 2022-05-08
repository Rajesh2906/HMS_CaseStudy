import React from 'react'
import {NavLink} from "react-router-dom";
import './OwnerGuestNavBar.css'

function OwnerGuestNavBar() {
  return (
      <React.Fragment>
        <div className='oguestnavbar'>
          <ul>
              <li><NavLink to='/ownerhome'>Home</NavLink></li>
              <li><NavLink to='/oguestadd'>Add New Guest</NavLink></li>
              <li><NavLink to='/oguestupdate'>Update</NavLink></li>
              <li><NavLink to='/oguestgetall'>GetAll</NavLink></li>
              <li><NavLink to='/oguestcheckout'>Checkout Guest</NavLink></li>
              <li><NavLink to='/oguestaddreserved'>Add Reserved Guest</NavLink></li>
              <li><NavLink to='/oguestdelete'>Delete Guest Details</NavLink></li>
          </ul>
        </div>
    </React.Fragment>
  )
}

export default OwnerGuestNavBar