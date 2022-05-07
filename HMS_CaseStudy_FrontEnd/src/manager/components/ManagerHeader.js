import React, { Component,useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import authServices from "../services/auth.services";
import './ManagerHeader.css'

function ManagerHeader() {
    const [currentUser, setCurrentUser] = useState(undefined);
  
    useEffect(() => {
      const user = authServices.getCurrentUser();
  
      if (user) {
        setCurrentUser(user);
      }
    }, []);

    const logOut = () => {
      authServices.logout();
    };
  return (
    <div className="managerheader">
    {currentUser ? (
        
            <a href="/" onClick={logOut}  className="logoutman">
              Logout
            </a>
      
      ) 
      : (
        
            <Link to={"/managerlogin/*"} className="logoutman">
              Login
            </Link>
          
      )
      }
  </div>
  )
}

export default ManagerHeader