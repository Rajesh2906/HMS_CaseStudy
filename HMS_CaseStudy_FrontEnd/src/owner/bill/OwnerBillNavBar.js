import React from 'react'
import {NavLink} from "react-router-dom";


function OwnerBillNavBar() {
  return (
      <React.Fragment>
          <div className='resnavbar'>
        <ul>  
            <li><NavLink to='/ogeneratebill'>Generate</NavLink></li>
            <li><NavLink to='/ogetallbills'>All Bills</NavLink></li>
            <li><NavLink to='/oprintbill'>Print Bill</NavLink></li>
            <li><NavLink to='/ownerhome'>Home</NavLink></li>
        </ul>
        </div>
    </React.Fragment>
  )
}

export default OwnerBillNavBar