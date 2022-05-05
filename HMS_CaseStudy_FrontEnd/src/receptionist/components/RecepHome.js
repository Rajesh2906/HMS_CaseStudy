import React, { Component,useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Link,NavLink,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import authServices from "../services/auth.services";
import RecepHeader from "./RecepHeader";
import './RecepHome.css'

function RecepHome() {


  return (
    <div className="recephome">
      <RecepHeader/>
    <div>  
			{/* Endpoint to route to Manager component */}
			<Link to="/reservation" className="reservationlink">Reservation</Link>	
    </div>
  </div>
  )
}

export default RecepHome
