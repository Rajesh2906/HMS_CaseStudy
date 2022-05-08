import React from 'react'
import {NavLink} from "react-router-dom";
import './OwnerInventoryNavBar.css';

function OwnerInventoryNavBar() {
  return (
      <React.Fragment>
        <div className='oinventorynavbar'>
          <ul>
              <li><NavLink to='/ownerhome'>Home</NavLink></li>
              <li><NavLink to='/oaddinventory'>Add</NavLink></li>
              <li><NavLink to='/ogetinventory'>Get</NavLink></li>
              <li><NavLink to='/oupdateinventory'>Update</NavLink></li>
          </ul>
        </div>
    </React.Fragment>
  )
}

export default OwnerInventoryNavBar