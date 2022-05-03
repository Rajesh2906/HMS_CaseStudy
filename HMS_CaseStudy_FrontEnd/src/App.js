import "./App.css";
// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import Home from "./components/Home";
import OwnerLogin from "./owner/OwnerLogin";
import React from "react";
import RecepLogin from "./receptionist/RecepLogin";
import ManagerLogin from "./manager/ManagerLogin";
import Reservation from "./components/Reservation";


  

  
function App() {
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />        
          <Route path="/receptionistlogin/*" element={<RecepLogin/>} />               
          <Route path="/managerlogin/*" element={<ManagerLogin/>} />
          <Route path="/ownerlogin/*" element={<OwnerLogin/>} />
          <Route path="/reservation" element={<Reservation/>} />        
        </Routes>
      </Router>
    </>
  ); 
}
  
export default App;