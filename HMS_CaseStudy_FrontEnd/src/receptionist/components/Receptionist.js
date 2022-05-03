import React, { Component } from 'react'
import { Link, Route, 
  BrowserRouter as Router, Routes } from 'react-router-dom'
import Reservation from '../../components/Reservation'

class Receptionist extends Component {
  render() {
    return (
     <React.Fragment>

      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/receptionist/reservation">Reservation</Link>
      </div>
      <div>
        <Routes>
          <Route path={"/reservation"} element={<Reservation/>}></Route>
        </Routes>
      </div>
 
      </React.Fragment>
    )
    }
}

export default Receptionist
