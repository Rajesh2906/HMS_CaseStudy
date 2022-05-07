import React, { Component,useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import OwnerHeader from "./OwnerHeader";
import './OwnerHome.css'
import reserve from '../images/reserve.png'
import guest from '../images/guest.png'
import bill from '../images/bill.png'
import rooms1 from '../images/rooms2.png'
import payment from '../images/payment.png'
import rates1 from '../images/rates1.png'
import inventory from '../images/inventory.png'
import staff from '../images/staff.png'
import department from '../images/department.png'

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
   <NavLink to="/oresadd" className="redirectlink reservationown" ><img src={reserve} id='logos'/><br/><h4>Reservation</h4><p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></NavLink>	
   <NavLink to="/oguestadd" className="redirectlink guestown" ><img src={guest} id='logos'/><br/><h4> Guest</h4><p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></NavLink>	
   <NavLink to="/oaddroom" className="redirectlink roomsown" ><img src={rooms1} id='logos'/><br/><h4>Rooms</h4><p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></NavLink>	
   <NavLink to="/ogeneratebill" className="redirectlink billown"><img src={bill} id='logos'/><br/><h4>Bill</h4><p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></NavLink>	
   <NavLink to="/oaddnewrate" className="redirectlink ratesown" ><img src={rates1} id='logos'/><br/><h4>Rates</h4><p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></NavLink>	
   <NavLink to="/oaddinventory" className="redirectlink inventoryown" ><img src={inventory} id='logos'/><br/><h4>Inventory</h4><p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></NavLink>
   <NavLink to="/oaddstaff" className="redirectlink staffown" ><img src={staff} id='logos'/><br/><h4>Staff</h4><p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></NavLink>
   <NavLink to="/rpayment" className="redirectlink paymentown" id="payment" ><img src={payment} id='logos'/><br/><h4>Payment</h4><p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></NavLink>	
   <NavLink to="/oadddepartment" className="redirectlink departmentown" ><img src={department} id='logos'/><br/><h4>Department</h4><p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></NavLink>
  </div>

  <div className="galleryown">
    <img id="img 1" src="{imagetest}"/>
  </div>
</div>
  )
}

export default OwnerHome
