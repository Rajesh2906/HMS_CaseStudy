import "./App.css";
// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import Home from "./components/Home";
import OwnerLogin from "./owner/OwnerLogin";
import RecepLogin from "./receptionist/RecepLogin";
import ManagerLogin from "./manager/ManagerLogin";

import RecepHome from "./receptionist/components/RecepHome";
import ManagerHome from "./manager/components/ManagerHome";
import OwnerHome from "./owner/components/OwnerHome";
import ResAdd from "./components/reservation/ResAdd";

import ResUpdate from "./components/reservation/ResUpdate";
import ResGetAll from "./components/reservation/ResGetAll";
import ResGetById from "./components/reservation/ResGetById";

  
function App() {

  return (
    <div>
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />        
          <Route path="/receptionistlogin/*" element={<RecepLogin/>} />               
          <Route path="/managerlogin/*" element={<ManagerLogin/>} />
          <Route path="/ownerlogin/*" element={<OwnerLogin/>} />
          <Route path="/reservation" element={<ResAdd/>} />   
          <Route path="/recephome" element={<RecepHome/>} />    
          <Route path="/managerhome" element={<ManagerHome/>} />  
          <Route path="/ownerhome" element={<OwnerHome/>} />  

         

          <Route path='/resupdate' element={<ResUpdate/>}></Route>
          <Route path='/resgetall' element={<ResGetAll/>}></Route>
          <Route path='/resgetbyid' element={<ResGetById/>}></Route>
          <Route path='/resadd' element={<ResAdd/>}></Route>
        </Routes>
      </Router>
    </>
    </div>
  );
}
  
export default App;