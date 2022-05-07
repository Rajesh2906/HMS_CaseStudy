import React, { Component,useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import './OwnerHeader.css'
import authService from "../services/auth.service";

function OwnerHeader() {
    const [currentUser, setCurrentUser] = useState(undefined);
  
    useEffect(() => {
      const user = authService.getCurrentUser();
  
      if (user) {
        setCurrentUser(user);
      }
    }, []);

    const logOut = () => {
      authService.logout();
    };

  return (
    <div className='ownerheader'>
       {currentUser ? (
               <a href="/"  onClick={logOut} className='logoutown'>
                 Logout
               </a>
         ) 
         : (
               <Link to={"/ownerlogin/*"} className='logoutown'>
                 Login
               </Link>
         )
         }
  </div>
  )
}

export default OwnerHeader