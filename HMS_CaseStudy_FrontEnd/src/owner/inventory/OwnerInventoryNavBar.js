import React from 'react'
import {NavLink} from "react-router-dom";

function OwnerInventoryNavBar() {
  return (
      <React.Fragment>
        <ul>
            <li><NavLink to='/ownerhome'>Home</NavLink></li>
            <li><NavLink to='/oaddinventory'>Add Inventory</NavLink></li>
            <li><NavLink to='/ogetinventory'>Get All</NavLink></li>
            <li><NavLink to='/oupdateinventory'>Update Inventory</NavLink></li>
        </ul>
    </React.Fragment>
  )
}

export default OwnerInventoryNavBar