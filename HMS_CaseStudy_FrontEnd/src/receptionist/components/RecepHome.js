import React, { Component,useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Link,NavLink,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import RecepHeader from "./RecepHeader";
import './RecepHome.css'
import reserve from '../images/reserve.png'
import guest from '../images/guest.png'
import bill from '../images/bill.png'
import rooms from '../images/rooms2.png'
import payment from '../images/payment.png'
import rates from '../images/rates.png'

function RecepHome() {



  return (
  <div className="background">
     
      <div className="parallax"> <RecepHeader/></div>
      <div className="betweenbar">
        <ul>
          <li><a href="#img1">Gallery</a></li>
          <li><a href="#img1">Events</a></li>
          <li><a href="#img1">Support</a></li>
          <li><a href="#img1">Services</a></li>
        </ul>
      </div>
      
     
    <div className="mapping">  
			{/* Endpoint to route to receptionist component */}
		 <NavLink to="/rreservationadd" className="redirectlink reservation" ><img src={reserve} id='logos'/><br/><h4>Reservation</h4><p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></NavLink>	
     <NavLink to="/rguestadd" className="redirectlink guest" ><img src={guest} id='logos'/><br/><h4> Guest</h4><p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></NavLink>	
     <NavLink to="/rbillgenerate" className="redirectlink bill" ><img src={bill} id='logos'/><br/><h4> Generate Bill</h4><p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></NavLink>	
     <NavLink to="/ravailablerooms" className="redirectlink rooms"><img src={rooms} id='logos'/><br/><h4> Available Rooms</h4><p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></NavLink>	
     <NavLink to="/rpayment" className="redirectlink payment" id="payment" ><img src={payment} id='logos'/><br/><h4>Payment</h4><p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></NavLink>	
     <NavLink to="/rgetrates" className="redirectlink rates" ><img src={rates} id='logos'/><br/><h4>Rates</h4><p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></NavLink>
    </div>
    <div className="gallery">
      <img id="img 1" src="{imagetest}"/>
    </div>
  </div>
  )
}

export default RecepHome
