import React, { Component,useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import authServices from "../services/auth.services";
import ManagerHeader from "./ManagerHeader";
import './ManagerHome.css'
import staff from '../images/staff.png'
import rooms1 from '../images/rooms1.png'
import inventory from '../images/inventory.png'
import rates1 from '../images/rates1.png'

function ManagerHome() {
  

  return (
    <div className="backgroundman">
     
      <div className="parallaxman"> <ManagerHeader/></div>
      <div className="betweenbarman">
        <ul>
          <li><a href="#img1">Gallery</a></li>
          <li><a href="#img1">Events</a></li>
          <li><a href="#img1">Support</a></li>
          <li><a href="#img1">Services</a></li>
        </ul>
      </div>
      
     
    <div className="mappingman">  
			{/* Endpoint to route to receptionist component */}
		 <NavLink to="/maddroom" className="redirectlinkman roomsman" ><img src={rooms1} id='logos'/><br/><h4>Rooms</h4></NavLink>	
     <NavLink to="/maddinventory" className="redirectlinkman inventoryman" ><img src={inventory} id='logos'/><br/><h4> Inventory</h4></NavLink>	
     <NavLink to="/maddnewrate" className="redirectlinkman ratesman"><img src={rates1} id='logos'/><br/><h4>Rates</h4></NavLink>	
     <NavLink to="/maddstaff" className="redirectlinkman staffman" ><img src={staff} id='logos'/><br/><h4>Staff</h4></NavLink>	
    </div>

    <div className="galleryman">
      <img id="img 1" src="{imagetest}"/>
    </div>
  </div>
  )
}

export default ManagerHome
