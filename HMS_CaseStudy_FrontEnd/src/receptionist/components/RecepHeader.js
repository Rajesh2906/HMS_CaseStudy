import React,{useState,useEffect} from 'react'
import {
    BrowserRouter as Router,
    Link,NavLink,
    Switch,
    Route,
    Routes
  } from "react-router-dom";
import authServices from '../services/auth.services';
import './RecepHeader.css'

function RecepHeader() {
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
    <div className='recepheader'>
      {currentUser ? (           
        <a href="/" onClick={logOut} className='logout'><h4>Logout</h4></a>                    
      ) 
      : (      
          <Link to={"/receptionistlogin/*"} className="nav-link">Login</Link>    
        )
      }  
    </div>
  )
}

export default RecepHeader