import React, { Component,useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import OwnerHeader from "./OwnerHeader";
import './OwnerHome.css'

function OwnerHome() {
  
  return (
    <div className="backgroundown">
     
    <div className="parallaxown"> <OwnerHeader/></div>
    <div className="betweenbarown">
      <ul>
        <li><a href="#img1">Gallery</a></li>
        <li><a href="#img1">Events</a></li>
        <li><a href="#img1">Support</a></li>
        <li><a href="#img1">Services</a></li>
      </ul>
    </div>
    
   
  <div className="mappingown">  
    {/* Endpoint to route to owner component */}
   <Link to="/oresadd" className="redirectlink reservation" ><img src="{reserve}" id='logos'/><br/><h4>Reservation</h4></Link>	
   <Link to="/oguestadd" className="redirectlink guest" ><img src="{guest}" id='logos'/><br/><h4> Guest</h4></Link>	
   <Link to="/oaddroom" className="redirectlink rooms" ><img src="{bill}" id='logos'/><br/><h4>Rooms</h4></Link>	
   <Link to="/ogeneratebill" className="redirectlink bill"><img src="{rooms}" id='logos'/><br/><h4>Bill</h4></Link>	
   <Link to="/oaddnewrate" className="redirectlink rates" ><img src="{payment}" id='logos'/><br/><h4>Rates</h4></Link>	
   <Link to="/oaddinventory" className="redirectlink inventory" ><img src="{payment}" id='logos'/><br/><h4>Inventory</h4></Link>
   <Link to="/oaddstaff" className="redirectlink staff" ><img src="{payment}" id='logos'/><br/><h4>Staff</h4></Link>
   <Link to="/oadddepartment" className="redirectlink department" ><img src="{payment}" id='logos'/><br/><h4>Department</h4></Link>
  </div>

  <div className="galleryown">
    <img id="img 1" src="{imagetest}"/>
  </div>
</div>
  )
}

export default OwnerHome
