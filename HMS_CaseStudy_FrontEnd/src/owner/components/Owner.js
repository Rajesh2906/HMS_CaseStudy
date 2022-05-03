import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  NavLink
} from "react-router-dom";
import Reservation from '../Reservation';
 
function Owner() {
  return (
    <>
    <div>
      <Link to="/owner/reservation/">Reservation</Link>
    </div> 
           <div>
      <Routes>
        <Route path={"/reservation"} element={<Reservation/>}></Route>
      </Routes>
    </div>
    
   
    <div>
        Owner
    </div>
    </>
  )
}

export default Owner
