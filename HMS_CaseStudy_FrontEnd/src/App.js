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
import Reservation from "./components/Reservation";
import RecepHome from "./receptionist/components/RecepHome";

  
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
          <Route path="/reservation" element={<Reservation/>} />   
          <Route path="/recephome" element={<RecepHome/>} />     
        </Routes>
      </Router>
    </>
    </div>
  );
}
  
export default App;