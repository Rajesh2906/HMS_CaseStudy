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

import Payment from "./receptionist/payment/Payment";
import RresAdd from "./receptionist/reservation/RresAdd";
import RGuestAdd from "./receptionist/guest/RGuestAdd";
import RGuestUpdate from "./receptionist/guest/RGuestUpdate";
import RGuestGetAll from "./receptionist/guest/RGuestGetAll";
import RGuestCheckout from "./receptionist/guest/RGuestCheckout";
import RGuestAddReserved from "./receptionist/guest/RGuestAddReserved";
import RGuestDelete from "./receptionist/guest/RGuestDelete";
import RGenerateBill from "./receptionist/bill/RGenerateBill";
import RGetAllBills from "./receptionist/bill/RGetAllBills";
import RPrintBill from "./receptionist/bill/RPrintBill";
import RGetAvailableRooms from "./receptionist/rooms/RGetAvailableRooms";
import RresUpdate from "./receptionist/reservation/RresUpdate";
import RresGetAll from "./receptionist/reservation/RresGetAll";

  
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
          <Route path="/recephome" element={<RecepHome/>} />    
          <Route path="/managerhome" element={<ManagerHome/>} />  
          <Route path="/ownerhome" element={<OwnerHome/>} /> 


          {/* Receptionist Routes  */}
          <Route path="/rreservationadd" element={<RresAdd/>}/>
          <Route path="/rresupdate" element={<RresUpdate/>}/>
          <Route path="/rresgetall" element={<RresGetAll/>}/>

          <Route path="/rguestadd" element={<RGuestAdd/>}/>
          <Route path='/rguestupdate' element={<RGuestUpdate/>}/>
          <Route path='/rguestgetall' element={<RGuestGetAll/>}/>
          <Route path='/rguestcheckout' element={<RGuestCheckout/>}/>
          <Route path='/rguestaddreserved' element={<RGuestAddReserved/>}/>
          <Route path='/rguestdelete' element={<RGuestDelete/>}/>


          <Route path="/rbillgenerate" element={<RGenerateBill/>}/>
          <Route path='/rgetallbills' element={<RGetAllBills/>}/>
          <Route path='/rprintbill' element={<RPrintBill/>}/>

          <Route path="/ravailablerooms" element={<RGetAvailableRooms/>}/>
          <Route path="/rpayment" element={<Payment/>}/>

         
       
        </Routes>
      </Router>
    </>
    </div>
  );
}
  
export default App;