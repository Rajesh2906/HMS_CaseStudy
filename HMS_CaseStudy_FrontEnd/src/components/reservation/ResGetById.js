import React,{useState} from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import ResNavBar from './ResNavBar'

function ResGetById() {

  const [reservation, setreservation] = useState({
    name:"",
    phoneNumber:"",
    emailId:"",
    gender:"",
    address:"",  
    numberOfAdult:"",
    numberOfChildren:"",
    company:"",
    checkIn:"",
    checkOut:"",
    numberOfNights:"",  
     reservationCode_:"",
     status_:""
  });

  const url="Receptionist/Receptionist/reservation/getreservationbyid?id="+reservation.reservationCode_
 

  function handle(e){
    const newdata={...reservation}
    newdata[e.target.id]=e.target.value
    setreservation(newdata)
}
  

        function submit(e){
          const item={
              reservationCode_:reservation.reservationCode_
              }
          e.preventDefault();
          axios.get(url,item)
              .then(res=>{
                setreservation(res.data);
                console.log(res.data);
              },
             );
          
      }

  
   
  
  return (
    <React.Fragment> 
        <ResNavBar/>
        <h1>Reservation update Form</h1>
        <form onSubmit={(e)=>submit(e)}></form>
        <input onChange={(e)=>handle(e)} id="reservationCode_" value={reservation.reservationCode_} placeholder='ReservationCode' type="text"/>
        <button type='submit'>submit</button>
        <div>  
        {/* <table>
          <thead className="thead-dark">
            <tr>
            <th>ReservationCode_</th>
              <th>name</th>
              <th>phoneNumber</th>
              <th>checkIn</th>
              <th>checkOut</th>
              <th>NoOfNights</th>
            </tr>
          </thead>
          <tbody>
          {
            reservation.map(reservation => (
              <tr key={reservation.reservationCode_}>
                <td>{reservation.reservationCode_}</td>
                <td>{reservation.name}</td>
                <td>{reservation.phoneNumber}</td>
                <td>{reservation.checkIn}</td>
                <td>{reservation.checkOut}</td>
                <td>{reservation.numberOfNights}</td>
              </tr>))
          }
          </tbody>
        </table> */}
      </div>
    </React.Fragment>
  )
}

export default ResGetById