import React from 'react';
import {NavLink} from "react-router-dom";
import './ManagerRatesNavBar.css'

function ManagerRatesNavBar() {
  return (
      <React.Fragment>
        <div className='mratesnavbar'>
          <ul>
            <li><NavLink to='/managerhome'>Home</NavLink></li>
            <li><NavLink to='/maddnewrate'>Add</NavLink></li>
            <li><NavLink to='/mgetrates'>Get</NavLink></li>
            <li><NavLink to='/mupdaterate'>Update</NavLink></li>
          </ul>
        </div>
    </React.Fragment>
  )
}

export default ManagerRatesNavBar