import React from 'react'
import {NavLink} from "react-router-dom";


function OwnerResNavBar() {
  return (
      <React.Fragment>
        <ul>
          <li><NavLink to='/ownerhome'>ReseptionistHome</NavLink></li>            
          <li><NavLink to='/oresadd'>Add</NavLink></li>
          <li><NavLink to='/oresupdate'>Update</NavLink></li>
          <li><NavLink to='/oresgetall'>GetAll</NavLink></li>
        </ul>
    </React.Fragment>
  )
}

export default OwnerResNavBar