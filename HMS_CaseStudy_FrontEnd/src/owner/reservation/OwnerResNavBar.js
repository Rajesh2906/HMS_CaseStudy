import React from 'react'
import {NavLink} from "react-router-dom";
import './OwnerResNavBar.css'


function OwnerResNavBar() {
  return (
      <React.Fragment>
        <div className='ownresnavbar'>
        <ul>           
          <li><NavLink to='/oresadd'>Add</NavLink></li>
          <li><NavLink to='/oresupdate'>Update</NavLink></li>
          <li><NavLink to='/oresgetall'>GetAll</NavLink></li>
          <li><NavLink to='/ownerhome'>Home</NavLink></li> 
        </ul>
        </div>
    </React.Fragment>
  )
}

export default OwnerResNavBar