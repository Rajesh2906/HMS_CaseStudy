import React from 'react'
import {NavLink} from "react-router-dom";

function ManagarInventoryNavBar() {
  return (
      <React.Fragment>
        <div className='ManagerInventoryNavBar'>
        <div className='mratesnavbar'>
          <ul>
              <li><NavLink to='/managerhome'>Home</NavLink></li>
              <li><NavLink to='/maddinventory'>Add</NavLink></li>
              <li><NavLink to='/mgetinventory'>Get</NavLink></li>
              <li><NavLink to='/mupdateinventory'>Update</NavLink></li>
          </ul>
        </div>
        </div>
    </React.Fragment>
  )
}

export default ManagarInventoryNavBar