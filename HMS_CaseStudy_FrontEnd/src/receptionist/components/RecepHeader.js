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
       
            <NavLink to='/recephome' className='home'>Home</NavLink>
       
      
            {currentUser ? (
               
                    <a href="/" onClick={logOut} className='logout'>Logout</a>              
               
            ) 
            : null
            }
    
    </div>
  )
}

export default RecepHeader