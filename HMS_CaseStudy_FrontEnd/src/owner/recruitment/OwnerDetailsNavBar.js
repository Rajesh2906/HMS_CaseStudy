import React from 'react'
import {NavLink} from "react-router-dom";
import './OwnerDetailsNavBar.css'

function OwnerDetailsNavBar() {
  return (
      <React.Fragment>
        <div className='odetailsnavbar'>
          <ul>
            <li><NavLink to='/oowneraddreceptionist'>Add Receptionist</NavLink></li>
            <li><NavLink to='/oaddmanager'>Add Manager</NavLink></li>
            <li><NavLink to='/ownerhome'>Home</NavLink></li>
          </ul>
        </div>
    </React.Fragment>
  )
}

export default OwnerDetailsNavBar