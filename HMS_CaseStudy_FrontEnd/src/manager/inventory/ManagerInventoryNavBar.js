import React from 'react'
import {NavLink} from "react-router-dom";

function ManagarInventoryNavBar() {
  return (
      <React.Fragment>
        <ul>
            <li><NavLink to='/managerhome'>Home</NavLink></li>
            <li><NavLink to='/maddinventory'>Add Inventory</NavLink></li>
            <li><NavLink to='/mgetinventory'>Get All</NavLink></li>
            <li><NavLink to='/mupdateinventory'>Update Inventory</NavLink></li>
        </ul>
    </React.Fragment>
  )
}

export default ManagarInventoryNavBar