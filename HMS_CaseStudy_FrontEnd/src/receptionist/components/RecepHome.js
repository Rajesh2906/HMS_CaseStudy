import React, { Component,useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Link,NavLink,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import ResAdd from "../../components/reservation/ResAdd";
import authServices from "../services/auth.services";
import RecepHeader from "./RecepHeader";
import './RecepHome.css'

function RecepHome() {


  return (
  <body className="background">
    <div className="recephome">
      <RecepHeader/>
    <div className="mapping">  
			{/* Endpoint to route to Manager component */}
			<Link to="/reservation" className="redirectlink reservation">Reservation</Link>	
      <Link to="/guestadd" className="redirectlink guest">Guest</Link>	
      <Link to="/billgenerate" className="redirectlink bill">Generate Bill</Link>	
      <Link to="/availablerooms" className="redirectlink rooms">Available Rooms</Link>	
      <Link to="/payment" className="redirectlink payment">Payment</Link>	
    </div>
  </div>
  </body>
  )
}

export default RecepHome
